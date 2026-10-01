"""Builds the 404 'nyan toaster' sprite sheet from the 43x30 toastercat.

6 frames, played at 70ms each (~14fps, the original Nyan Cat GIF's cadence):
  - body (toaster, nozzle, exhaust cone, rockets) bobs 1px up and back
  - a long rainbow trail streams off the exhaust and waves in 8px segments
  - steam wisps sway together, tips leaning further than roots
  - rocket flames flicker
  - pixel stars stream right-to-left, cycling through Nyan-style twinkle shapes

Usage: python3 scripts/build-nyan-sprite.py  (stdlib only)
Rewrites src/assets/toastercat-nyan.png from src/assets/toastercat-sprite.png.
"""

# --- minimal PNG read/write (RGBA8, no external deps) ---
import zlib, struct
def read_png(path):
    d = open(path, 'rb').read(); assert d[:8] == b'\x89PNG\r\n\x1a\n'
    i, idat, w = 8, b'', None
    while i < len(d):
        n = struct.unpack('>I', d[i:i+4])[0]; t = d[i+4:i+8]; c = d[i+8:i+8+n]; i += 12 + n
        if t == b'IHDR': w, h, bd, ct, _, _, il = struct.unpack('>IIBBBBB', c); assert (bd, ct, il) == (8, 6, 0), (bd, ct, il)
        elif t == b'IDAT': idat += c
    raw = zlib.decompress(idat); bpp, stride = 4, w * 4; rows, prev, p = [], bytearray(stride), 0
    for _ in range(h):
        f = raw[p]; line = bytearray(raw[p+1:p+1+stride]); p += 1 + stride
        for x in range(stride):
            a = line[x-bpp] if x >= bpp else 0; b = prev[x]; cc = prev[x-bpp] if x >= bpp else 0
            if f == 1: line[x] = (line[x] + a) & 255
            elif f == 2: line[x] = (line[x] + b) & 255
            elif f == 3: line[x] = (line[x] + (a + b) // 2) & 255
            elif f == 4:
                pa, pb, pc = abs(b - cc), abs(a - cc), abs(a + b - 2 * cc)
                line[x] = (line[x] + (a if pa <= pb and pa <= pc else b if pb <= pc else cc)) & 255
        rows.append(bytes(line)); prev = line
    return w, h, rows
def write_png(path, w, h, rows):
    raw = b''.join(b'\x00' + r for r in rows)
    chunk = lambda t, c: struct.pack('>I', len(c)) + t + c + struct.pack('>I', zlib.crc32(t + c) & 0xffffffff)
    open(path, 'wb').write(b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 6, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b''))

# --- sprite sheet ---


import os
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, '..', 'src', 'assets', 'toastercat-sprite.png')
OUT = os.path.join(HERE, '..', 'src', 'assets', 'toastercat-nyan.png')
sw, sh, srows = read_png(SRC)
spx = lambda x, y: tuple(srows[y][x*4:x*4+4])

TRAIL = 34            # rainbow trail length left of the sprite
PAD_R, PAD_T, PAD_B = 10, 5, 5
W, H = TRAIL + sw + PAD_R, PAD_T + sh + PAD_B
OX, OY = TRAIL, PAD_T  # sprite origin on the canvas
FRAMES = 6
CLEAR = (0, 0, 0, 0)
STAR = (242, 240, 235, 255)

BOB = [0, -1, -1, -1, 0, 0]            # body y-offset per frame
WAVE = [0, 0, 1, 1, 0, 0]              # trail wave phase per frame
STEAM = [0, 0, 1, 1, 0, 0]             # steam sway per frame

# Trail colours: the exhaust cone's leftmost column, rows 13-21 (mirrored stripes).
trail_rows = [(y, spx(0, y)) for y in range(13, 22)]

# Nyan-style star shapes (offsets from centre), cycled per frame.
SHAPES = [
    [(0, 0)],
    [(0, 0), (1, 0), (-1, 0), (0, 1), (0, -1)],
    [(0, 0), (2, 0), (-2, 0), (0, 2), (0, -2)],
    [(2, 0), (-2, 0), (0, 2), (0, -2), (3, 0), (-3, 0), (0, 3), (0, -3)],
    [(3, 0), (-3, 0), (0, 3), (0, -3), (2, 2), (-2, -2), (2, -2), (-2, 2)],
    [(0, 0), (2, 2), (-2, -2), (2, -2), (-2, 2)],
]
# (x, y, shape phase); stars move left 6px a frame and wrap.
STARS = [(70, 3, 0), (14, 4, 2), (52, 35, 4), (6, 33, 1), (84, 19, 3), (30, 9, 5)]

def frame(f):
    c = [[CLEAR] * W for _ in range(H)]
    put = lambda x, y, col: (0 <= x < W and 0 <= y < H) and c[y].__setitem__(x, col)

    # stars first, so everything else draws over them
    # (stars pass *behind* the toaster: never inside its box, so they can't
    #  scramble the outline or the steam)
    def behind_toaster(x, y):
        return OX - 1 <= x <= OX + sw and OY - 2 <= y <= OY + sh + 1
    for sx, sy, ph in STARS:
        x = (sx - 6 * f) % W
        for dx, dy in SHAPES[(ph + f) % len(SHAPES)]:
            if not behind_toaster(x + dx, sy + dy):
                put(x + dx, sy + dy, STAR)

    # rainbow trail: 8px segments, alternate segments raised 1px, flipping with WAVE
    for x in range(0, TRAIL + 1):
        seg = (TRAIL - x) // 8
        lift = -1 if (seg + WAVE[f]) % 2 else 0
        for y, col in trail_rows:
            # dither the far end into a checkerboard so the trail fades out
            # instead of ending on a hard edge
            if x < 3 or (x < 7 and (x + y) % 2):
                continue
            put(x, OY + y + lift, col)

    # sprite: steam (rows 0-4) sways; everything else bobs
    b = BOB[f]
    for y in range(sh):
        for x in range(sw):
            col = spx(x, y)
            if col[3] == 0:
                continue
            if y <= 4:
                # all four wisps sway together, like steam in a draught; the
                # tips (rows 0-2) lean further than the roots (rows 3-4)
                dx = STEAM[f] * (1 if y <= 2 else 0)
                put(OX + x + dx, OY + y + b, col)
            else:
                put(OX + x, OY + y + b, col)

    # rocket flames flicker on odd frames: flame reaches 1px further back,
    # and the glow pixels above/below blink off
    if f % 2:
        red, orange, yellow = spx(8, 28), spx(9, 28), spx(10, 28)
        for fx in (8, 23):
            put(OX + fx - 1, OY + 28 + b, red)
            put(OX + fx, OY + 28 + b, orange)
            put(OX + fx + 1, OY + 28 + b, yellow)
            put(OX + fx + 1, OY + 27 + b, CLEAR)
            put(OX + fx + 1, OY + 29 + b, CLEAR)
    return c

frames = [frame(f) for f in range(FRAMES)]
sheet = [b''.join(bytes(px) for f in frames for px in f[y]) for y in range(H)]
write_png(OUT, W * FRAMES, H, sheet)
print(f'frame {W}x{H}, sheet {W * FRAMES}x{H}')

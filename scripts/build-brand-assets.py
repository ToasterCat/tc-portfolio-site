"""
Brand assets for public/: favicon.ico, favicon-32.png, apple-touch-icon.png,
logo192.png, logo512.png, and og-card.png (the 1200x630 link-preview card).

All of them are built from src/assets/tc-3d.png and the site's own fonts and
colours, so re-run this after any brand change:

    python3 scripts/build-brand-assets.py      (needs Pillow; run from the repo root)
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
BG=(32,33,36); BLACK=(17,17,17); LIGHT=(237,232,223); GRAY=(196,191,180)
OLIVE=(186,181,90); OLIVE_DIM=(125,122,60); SIGNAL=(240,90,63)
W,H=1200,630
mark=Image.open('src/assets/tc-3d.png').convert('RGBA'); mark=mark.crop(mark.getbbox())
def fit(img,size):
    w,h=img.size; s=size/max(w,h); return img.resize((round(w*s),round(h*s)),Image.LANCZOS)
card=Image.new('RGBA',(W,H),BG+(255,))
dots=Image.new('RGBA',(W,H),(0,0,0,0)); d=ImageDraw.Draw(dots)
for y in range(0,H,16):
    for x in range(0,W,16): d.ellipse((x,y,x+2,y+2),fill=OLIVE+(40,))
card.alpha_composite(dots)
grad=Image.linear_gradient('L').rotate(90).resize((W,H))
card=Image.composite(Image.new('RGBA',(W,H),BLACK+(255,)),card,grad.point(lambda v:int(v*0.55)))
dr=ImageDraw.Draw(card)
dr.rectangle((0,0,W,6),fill=SIGNAL)
dr.line((64,H-88,W-64,H-88),fill=OLIVE_DIM,width=2)
m=fit(mark,330)
sh=Image.new('RGBA',(m.width+60,m.height+60),(0,0,0,0)); sh.paste((0,0,0,140),(30,30,30+m.width,30+m.height),m.split()[3]); sh=sh.filter(ImageFilter.GaussianBlur(14))
mx,my=90,(H-m.height)//2-20
card.alpha_composite(sh,(mx-20,my-14)); card.alpha_composite(m,(mx,my))
def font(f,size,axes=None):
    ft=ImageFont.truetype('src/assets/fonts/'+f,size)
    if axes: ft.set_variation_by_axes(axes)
    return ft
fh=font('SpaceGrotesk-Variable.woff2',76,[700]); fb=font('DMSans-Variable.woff2',34,[14,400]); fm=font('PTMono-Regular.woff2',26)
tx=500
dr.text((tx,200),'\\>',font=font('PTMono-Regular.woff2',44),fill=OLIVE_DIM)
dr.text((tx+70,186),'ToasterCat',font=fh,fill=LIGHT); dr.text((tx+70,268),'Studios',font=fh,fill=LIGHT)
dr.text((tx,372),'Games, websites, hardware, and audio',font=fb,fill=GRAY)
dr.text((tx,416),'from one Seattle studio.',font=fb,fill=GRAY)
url='toastercat-studios.com'
dr.text((W-64,H-44),url,font=fm,fill=OLIVE,anchor='rs')
card.convert('RGB').save('public/og-card.png',optimize=True)
print('og-card ok')

# --- Favicons and app icons ------------------------------------------------
def on_bg(size, pad, bg):
    c=Image.new('RGBA',(size,size),bg+(255,))
    m=fit(mark,size-2*pad); c.alpha_composite(m,((size-m.width)//2,(size-m.height)//2)); return c

fav=Image.new('RGBA',(256,256),(0,0,0,0)); fm_=fit(mark,248); fav.alpha_composite(fm_,((256-fm_.width)//2,(256-fm_.height)//2))
fav.save('public/favicon.ico', sizes=[(16,16),(32,32),(48,48),(64,64)])
fav.resize((32,32),Image.LANCZOS).save('public/favicon-32.png', optimize=True)
# Touch/app icons sit on an opaque dark tile: iOS and Android mask transparent corners.
on_bg(180,18,BG).convert('RGB').save('public/apple-touch-icon.png', optimize=True)
on_bg(192,20,BG).convert('RGB').save('public/logo192.png', optimize=True)
on_bg(512,52,BG).convert('RGB').save('public/logo512.png', optimize=True)
print('icons ok')

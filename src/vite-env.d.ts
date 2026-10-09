/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Override for the media CDN base URL (see src/media.ts). */
  readonly VITE_MEDIA_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

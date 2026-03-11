/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PANCAKE_CRM_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

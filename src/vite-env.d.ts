/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV:
    | 'local'
    | 'development'
    | 'qa'
    | 'production'
    | 'test';
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import path, { dirname } from 'path';
import inject from '@rollup/plugin-inject';
import stdLibBrowser from 'node-stdlib-browser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const globalPath = path.resolve(
  __dirname,
  './node_modules/node-stdlib-browser/helpers/esbuild/shim'
);
const symbolCryptoWasmPath = path.resolve(
  __dirname,
  './node_modules/symbol-crypto-wasm-web/symbol_crypto_wasm'
);

export default defineConfig({
  plugins: [
    react(),
    wasm(),
    {
      ...inject({
        global: [globalPath, 'global'],
        process: [globalPath, 'process'],
        Buffer: [globalPath, 'Buffer'],
      }),
      enforce: 'post',
    },
  ],
  resolve: {
    alias: {
      ...stdLibBrowser,
      'symbol-crypto-wasm-node': symbolCryptoWasmPath,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  build: {
    target: 'es2020',
  },
});

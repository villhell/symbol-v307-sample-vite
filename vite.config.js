import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import wasm from 'vite-plugin-wasm';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const symbolCryptoWasmPath = path.resolve(
  __dirname,
  './node_modules/symbol-crypto-wasm-web/symbol_crypto_wasm'
);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    include: ['symbol-sdk'],
  },
  plugins: [
    react(),
    wasm(),
    nodePolyfills({
      // To exclude specific polyfills, add them to this list.
      exclude: ['fs'], // Excludes the polyfill for `fs` and `node:fs`.
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: /symbol-crypto-wasm-node/,
        replacement: symbolCryptoWasmPath,
      },
    ],
  },
});

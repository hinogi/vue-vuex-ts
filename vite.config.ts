/// <reference types="vitest" />
import { defineConfig } from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import * as hq from 'alias-hq'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
  define: { 'process.env': {} },
  plugins: [
    VuePlugin({
      template: { transformAssetUrls },
    }),
    Vuetify(),
  ],
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    globals: true,
    environment: 'happy-dom',
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
  resolve: {
    alias: hq.get('rollup'),
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 5000,
    host: true,
  },
})

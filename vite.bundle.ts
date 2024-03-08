import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginI18n from './scripts/vite-plugin-i18n';
import VitePluginVersion from './scripts/vite-plugin-version';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), VitePluginI18n(), VitePluginVersion()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    build: {
        lib: {
            entry: fileURLToPath(new URL('./src/main.ts', import.meta.url)),
            name: 'RAMP'
        },
        rollupOptions: {
            treeshake: {
                moduleSideEffects: false
            },
            output: {
                inlineDynamicImports: true,
                assetFileNames: (assetInfo: any) => {
                    return assetInfo.name === 'style.css'
                        ? 'bad.css'
                        : assetInfo.name;
                }
            }
        }
    }
});

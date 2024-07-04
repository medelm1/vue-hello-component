import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'VueHelloComponent',
            fileName: (format, name) => {
                if (format === 'es') {
                    return `${name}.js`;
                }

                return `${name}.${format}.js`;
            }
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
            },
        },
    },
    plugins: [vue()]
});

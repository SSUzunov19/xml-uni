import * as path from 'node:path';
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        sourcemap: true,
    },
    assetsInclude: ['**/*.kml'],
    plugins: [react()],
    resolve: {
        alias: {
            '@maps': path.resolve(import.meta.dirname, './maps'),
            '@scripts': path.resolve(import.meta.dirname, './scripts'),
            '@styles': path.resolve(import.meta.dirname, './styles'),
        }
    },
});

import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

const config = defineConfig([
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                sourcemap: true
            },
            {
                file: 'dist/index.esm.js',
                format: 'esm',
                sourcemap: true
            },
        ],
        plugins: [typescript({ declarationDir: 'dist/types' })],
        external: ['react', 'react-dom'],
    }
]);

export default config;

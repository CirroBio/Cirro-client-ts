import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Creates a rollup configuration for a package
 * @param {string} packagePath - Path to the package directory
 * @returns {import('rollup').RollupOptions} Rollup configuration
 */
export function createRollupConfig(packagePath) {
  const pkg = JSON.parse(readFileSync(resolve(packagePath, 'package.json')));
  
  // Automatically detect externals from dependencies and peerDependencies
  const externals = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    // Common React packages that should always be external
    'react',
    'react-dom',
    // Common MUI packages
    '@mui/material',
    '@mui/material/styles',
    '@mui/icons-material',
    '@mui/lab',
    // Common Emotion packages
    '@emotion/react',
    '@emotion/styled',
    // AWS packages
    '@aws-sdk/client-s3',
    '@aws-sdk/lib-storage',
    '@aws-sdk/s3-request-presigner',
    'aws-amplify',
    'aws-amplify/auth',
    'aws-amplify/utils'
  ];

  return defineConfig({
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      typescript({ 
        declarationDir: 'dist/types',
        tsconfig: resolve(packagePath, 'tsconfig.json')
      })
    ],
    external: externals
  });
} 
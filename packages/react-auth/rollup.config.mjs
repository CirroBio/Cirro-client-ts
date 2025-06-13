import { createRollupConfig } from '../shared/rollup.config.base.mjs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packagePath = resolve(__dirname);

export default createRollupConfig(packagePath);

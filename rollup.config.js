// @ts-check
import path from 'path';
import builtins from 'builtin-modules';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

// tslint:disable-next-line jsdoc
/** @type {(dir: string) => string} */
const resolveLocal = (dir) => path.join(__dirname, dir);

const pkg = require(resolveLocal('./package.json'));
// only packages contains native code should be set as external, the other should be bundled
const runtimeDeps = Object.keys(pkg.dependencies || {});

/** @type {import('rollup').RollupOptions} */
const config = {
  input: resolveLocal('src/main.ts'),
  output: [
    {
      file: resolveLocal('dist/main.js'),
      format: 'cjs',
      banner: '#!/usr/bin/env node',
      sourcemap: process.env.NODE_ENV === 'development',
    },
    {
      file: resolveLocal('dist/main.min.js'),
      format: 'cjs',
      banner: '#!/usr/bin/env node',
      sourcemap: process.env.NODE_ENV === 'development',
      plugins: [terser()],
    },
  ],
  plugins: [
    alias({
      entries: [
        {
          find: /^@\//,
          replacement: resolveLocal('src/'),
        },
      ],
    }),
    resolve(),
    json(),
    commonjs(),
    typescript({
      clean: true,
      tsconfig: resolveLocal('src/tsconfig.app.json'),
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext',
        },
      },
    }),
  ],
  // Note: import nested module paths like 'xxx/es/comp' would have issue
  external: builtins.concat(runtimeDeps),
};

export default config;

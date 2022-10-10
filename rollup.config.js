/* eslint-disable import/no-extraneous-dependencies */
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoExternal from 'rollup-plugin-auto-external';
import images from 'rollup-plugin-image-files';
import cssbundle from 'rollup-plugin-css-bundle';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/components/index.js',
  output: {
    file: 'lib/bundle.js',
    format: 'cjs',
    globals: { 'styled-components': 'styled' }
  },
  plugins: [
    peerDepsExternal(),
    autoExternal(),
    resolve({
      extensions: [
        '.js',
        '.jsx'
      ]
    }),
    images(),
    cssbundle(),
    copy({
      targets: [{ src: 'src/styles/fonts', dest: 'lib' }]
    }),
    commonjs({
      ignoreGlobal: true,
      include: /\/node_modules\//,
    }),
    babel({
      exclude: 'node_modules/**'
    }),
  ],
};

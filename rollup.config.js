import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default [

  {
    input: './js/main.js',

    output: {
      file: './build/js/bundle.js',
      format: 'cjs'
    },

    plugins: [
      resolve({
        browser: true
      }),
      commonjs(),
      getBabelOutputPlugin({
        presets: ['@babel/preset-env']
      })
    ]
  }

];

// Rollup.js configuration
import replace from '@rollup/plugin-replace';
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const
  dev = (process.env.NODE_ENV !== 'production'),
  sourcemap = dev ? 'inline' : false,
  tokens = {
    __CLOCKSELECTOR__: '.clock',
    __CLOCKINTERVAL__: 1000,
    __CLOCKFORMAT__: 'formatHMS'
  };

console.log(`running in ${ dev ? 'development' : 'production' } mode`);

export default [

  {

    input: './src/main-replace.js',

    watch: {
      clearScreen: false
    },

    plugins: [
      replace(tokens),
      resolve({
        browser: true
      }),
      commonjs()
    ],

    output: {
      file: './build/bundle.js',
      format: 'iife',
      sourcemap
    }

  }

];

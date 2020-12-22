// Rollup.js configuration
import replace from '@rollup/plugin-replace';
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';

// settings
const
  dev = (process.env.NODE_ENV !== 'production'),
  sourcemap = dev ? 'inline' : false,

  input = './src/main-replace.js',

  watch = { clearScreen: false },

  tokens = {
    __CLOCKSELECTOR__: '.clock',
    __CLOCKINTERVAL__: 1000,
    __CLOCKFORMAT__: 'formatHMS'
  };

console.log(`running in ${ dev ? 'development' : 'production' } mode`);

export default [

  {
    // ES6 output
    input,
    watch,

    plugins: [
      replace(tokens),
      resolve({ browser: true }),
      commonjs()
    ],

    output: {
      file: './build/bundle.mjs',
      format: 'iife',
      sourcemap
    }

  },

  {
    // ES5 output
    input,
    watch,

    plugins: [
      replace({
        ...tokens,
        __POLYFILL__: "import './lib/polyfill.js';"
      }),
      resolve({ browser: true }),
      commonjs(),
      buble()
    ],

    output: {
      file: './build/bundle.js',
      format: 'iife',
      sourcemap
    }

  }

];

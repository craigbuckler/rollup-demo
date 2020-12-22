// Rollup.js with npm modules
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const
  dev = (process.env.NODE_ENV !== 'production'),
  sourcemap = dev ? 'inline' : false;

console.log(`running in ${ dev ? 'development' : 'production' } mode`);

export default [

  {

    input: './src/main-dayjs.js',

    watch: {
      clearScreen: false
    },

    plugins: [
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

// Rollup.js development and production configurations

const dev = (process.env.NODE_ENV !== 'production');

console.log(`running in ${ dev ? 'development' : 'production' } mode`);

const sourcemap = dev ? 'inline' : false;

export default [

  {

    input: './src/main.js',

    watch: {
      clearScreen: false
    },

    output: {
      file: './build/bundle.js',
      format: 'iife',
      sourcemap
    }

  }

]

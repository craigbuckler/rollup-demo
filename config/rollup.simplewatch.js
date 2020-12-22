// simple Rollup.js configuration

export default {

  input: './src/main.js',

  watch: {
    clearScreen: false
  },

  output: {
    file: './build/bundle.js',
    format: 'iife',
    sourcemap: 'inline'
  }

}

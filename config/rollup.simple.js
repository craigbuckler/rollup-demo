// simple Rollup.js configuration

export default {

  input: './src/main.js',

  output: {
    file: './build/bundle.js',
    format: 'iife',
    sourcemap: 'inline'
  }

}

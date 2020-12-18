# Rollup.js introduction

npm init

install Rollup globally
npm install --global rollup

Has the benefit that you can run `rollup` from the command line.

different developers could have different versions -- or no version. Install locally:
npm install rollup --save-dev

Either way, it'll require 3MB

Can then run with `npx rollup` or add to npm scripts.

list of command-line options
npx rollup --help

basic build:

npx rollup ./js/main.js --file ./build/js/bundle.js --format es

with watching

npx rollup ./js/main.js --file ./build/js/bundle.js --format es --watch

quickly becomes long, so create `rollup.config.js`:

```js
export default [

  {
    input: './js/main.js',
    output: {
      file: './build/js/bundle.js',
      format: 'es'
    }
  }

];
```

## Using Babel

Compile code to ES5. Less necessary.

```js
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
```

## Add dayjs library

npm install dayjs

npm install @rollup/plugin-commonjs @rollup/plugin-node-resolve --save-dev

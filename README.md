# Rollup.js introduction

This example project demonstrates how to use [Rollup.js](https://rollupjs.org/) to bundle JavaScript files. Clone the project then run `npm install` to install all dependencies.

The project provides JavaScript which shows a realtime digital clock on an HTML page. A server can be started with `npm run server` so you can access pages at <http://localhost:8888/>, e.g. <http://localhost:8888/index.original.html>

Rollup.js is installed locally and all configuration files are provided in the `config` directory.


## Quickstart example

Run:

```bash
npm run quickstart
```

or

```bash
npx rollup ./src/main.js --file ./build/bundle.js --format iife --sourcemap inline
```

A single `build/bundle.js` file is created from the source files with an inline sourcemap.

Start the server with `npm run server` then load <http://localhost:8888/index.html>


## Automatic bundling

Run:

```bash
npm run quickstart:watch
```

or

```bash
npx rollup ./src/main.js --file ./build/bundle.js --format iife --sourcemap inline --watch --no-watch.clearScreen
```

JavaScript files in the `src` directory are automatically bundled when changes occur.


## Simple configuration file

Run:

```bash
npm run simple
```

or

```bash
npx rollup --config ./config/rollup.simple.js
```

to use the `./config/rollup.simple.js` configuration file which is identical to the quickstart example.

Run `npm run simple:watch` for automatic bundling. Note that `watch` options can be defined in the configuration file, but `--watch` must still be added as a `rollup` command-line flag.


## Development and production modes

Environment variables can be passed to the configuration file using the `rollup --environment` flag, e.g.

```bash
npx rollup --config ./config/rollup.devprod.js --environment NODE_ENV:development
npx rollup --config ./config/rollup.devprod.js --environment NODE_ENV:production
```

This configuration removes the sourcemap in `production` mode.


## Use npm modules

Node.js npm modules can be included in bundled scripts with two plugins:

1. [`node-resolve`](https://github.com/rollup/plugins/tree/master/packages/node-resolve) which locates the module in the `node_modules` directory, and
1. [`plugin-commonjs`](https://github.com/rollup/plugins/tree/master/packages/commonjs) which converts CommonJS modules to ES6.

Install the [day.js date library](https://day.js.org/):

```bash
npm install dayjs --save-dev
```

and bundle the `src/main-dayjs.js` script:

```bash
npm run nodemodule
```

or

```bash
npx rollup --config ./config/rollup.npm.js
```


## Replace tokens

Install the Rollup.js [replace plugin](https://github.com/rollup/plugins/tree/master/packages/replace):

```bash
npm install @rollup/plugin-replace --save-dev
```

The configuration file specifies `tokens` to replace in the bundled script. Run with:

```bash
npm run replace
```

or

```bash
npx rollup --config ./config/rollup.replace.js
```


## Bundle ES5 and ES6

Bundle both ES6 `build/bundle.mjs` and ES5 `build/bundle.js` scripts using:

```bash
npm run es5
```

or

```bash
npx rollup --config ./config/rollup.es5.js
```

Start the server with `npm run server` then load <http://localhost:8888/index.es5.html>. The clock works in IE11 and modern browsers.

const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./dev.config');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  stats: {
    colors: true,
    modules: false,
    version: false,
    entrypoints: false,
    builtAt: false,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

// Implemention inspiration: https://github.com/glenjamin/ultimate-hot-reloading-example
// Basically, when the client is rebuilt, we have to throw away the cached /src/ directory so the server
// has the updated version that client has. Else, there will be a server/client mismatch when the app is reloaded in the browser.
compiler.hooks.done.tap('NukeServerPlugin', () => {
  console.log('[HMR] Clearing /src/ module cache from server...');

  Object.keys(require.cache).forEach((id) => {
    if (/\/src\//.test(id)) {
      delete require.cache[id];
    }
  });
});

module.exports = app; // dynamically required in server/index

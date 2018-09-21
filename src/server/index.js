/* eslint-disable global-require */

import express from 'express';

const app = express();

app.get('/hi', (req, res) => res.send('hello'));

if (process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('../../webpack/webpack-dev-middleware'); // eslint-disable-line global-require
  app.use(webpackDevMiddleware);
}

app.get('*', (req, res, next) => {
  // It is imperative that the SSR middleware is dynamically required because
  // webpack HMR rebuilds will throw away the previously-cached client modules on the server
  // The next time this route is hit, the updated modules will be fetched and the server+client will stay synced
  // See the cache-busting logic in ./webpack/webpack-dev-middleware
  require('./renderSSR')() // eslint-disable-line global-require
  .then((html) => {
    return res.send(html);
  })
  .catch((err) => {
    return next(err);
  });
});

app.listen(3000, () => console.log('Please navigate to port 3000'));

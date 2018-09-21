/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../views/App';
import renderHTML from './renderHTML';

function renderSSR() {
  const component = (
    <App />
  );

  const markup = ReactDOMServer.renderToString(component);

  const html = renderHTML(markup);

  return Promise.resolve(html);
}

module.exports = renderSSR; // renderSSR is dynamically required in ./server/index

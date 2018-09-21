import React from 'react';
import ReactDOM from 'react-dom';

import App from '../views/App';

const component = (
  <App />
);

ReactDOM.hydrate(component, document.getElementById('content'));

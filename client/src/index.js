import React from 'react';
// import { render } from 'react-dom';
import { render } from 'react-snapshot'; // eslint-disable-line import/no-extraneous-dependencies
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const target = document.querySelector('#root');

render(<App />, target);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App />, target);
  });
}


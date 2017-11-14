import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

require('typeface-roboto');
require('typeface-share-tech');

const rootElement = document.getElementById('root');

render(<App />, rootElement);

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App2', () => {
    render(<App />, rootElement);
  });
}

import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

require('typeface-roboto');
require('typeface-share-tech');

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    render(<App />, rootElement);
  });
}

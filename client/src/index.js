import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
// import { render } from 'react-snapshot'; // eslint-disable-line import/no-extraneous-dependencies
import App from './App';
import registerServiceWorker from './registerServiceWorker';

require('typeface-roboto');
require('typeface-share-tech');

const root = document.getElementById('root');

if (navigator.userAgent.match(/Node\.js/i) && window && window.reactSnapshotRender) { // eslint-disable-line
  root.innerHTML = ReactDOMServer.renderToString(<App />);
  window.reactSnapshotRender();
} else {
  ReactDOM.render(<App />, root);
}

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App />, root);
  });
}

/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      root,
    );
  });
}


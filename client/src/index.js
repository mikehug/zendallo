import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
// import { render } from 'react-snapshot'; // eslint-disable-line import/no-extraneous-dependencies
import App from './App';
import registerServiceWorker from './registerServiceWorker';

require('typeface-roboto');
require('typeface-share-tech');

if (navigator.userAgent.match(/Node\.js/i) && window && window.reactSnapshotRender) { // eslint-disable-line
  document.getElementById('root').innerHTML = ReactDOMServer.renderToString(<App />);
  window.reactSnapshotRender();
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}


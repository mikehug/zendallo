import React, { Component } from 'react';
import withRoot from './components/withRoot';
import NavBar from './components/NavBar';
import FullWidthGrid from './components/FullWidthGrid';
// In your render...

class App extends Component { // eslint-disable-line 
  render() {
    return (
      <div>
        <NavBar />
        <FullWidthGrid />
      </div>
    );
  }
}

export default withRoot(App);

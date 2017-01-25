import React, { Component } from 'react';

import Nav from './nav';
import Counter from './counter';

class Home extends Component {
  render() {
    return (
      <div>
        index .
        <Nav label="首页" />
        <Counter />
      </div>
    );
  }
}

export default Home;

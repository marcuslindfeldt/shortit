import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Link from './Link'
import CreateLink from './CreateLink'

class App extends Component {
  render() {
    return (
      <>
      <CreateLink></CreateLink>
      <Link />
      </>
    );
  }
}

export default App;

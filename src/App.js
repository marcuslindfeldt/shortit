import React, { Component } from 'react';

import CreateLink from './CreateLink';
import ShowUrl from './ShowUrl';
import LinkList from './LinkList';
// import Link from './Link';
import TinyUrls from './TinyUrls';

class App extends Component {
  render() {
    return (
      <TinyUrls>
        <>
          <CreateLink />
          <ShowUrl />
          <LinkList />
        </>
      </TinyUrls>
    );
  }
}

export default App;

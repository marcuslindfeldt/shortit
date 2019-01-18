import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import RedirectUrl from './RedirectUrl';

import CreateLink from './CreateLink';
import ShowUrl from './ShowUrl';
import LinkList from './LinkList';
// import Link from './Link';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <>
            <CreateLink />
            <ShowUrl />
            <LinkList />
          </>
        </Route>
        <Route path="/:id" component={RedirectUrl} />
      </Switch>
    );
  }
}

export default App;

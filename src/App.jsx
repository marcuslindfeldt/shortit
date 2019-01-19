import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import RedirectUrl from './RedirectUrl';

import CreateLink from './CreateLink';
import ShowUrl from './ShowUrl';
import LinkList from './LinkList';

import logoSrc from './logo.svg';

const AppLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 8rem;

  :before {
    content: '';
    position: absolute;
    z-index: -1;
    background: #ffda38;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    height: 25rem;
  }
`;

const Logo = styled.a`
  border-style: none;
  position: absolute;
  top: 0;
  left: 0;

  :hover,
  :focus {
    outline: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <AppLayout>
            <Logo href="/" tabIndex="-1">
              <img src={logoSrc} alt="logo" />
            </Logo>
            <CreateLink />
            <ShowUrl />
            <LinkList />
          </AppLayout>
        </Route>
        <Route path="/:id" component={RedirectUrl} />
      </Switch>
    );
  }
}

export default App;

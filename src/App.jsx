import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Normalize } from 'styled-normalize';
import styled from 'styled-components/macro';

import TinyUrls from './TinyUrls';
import GlobalStyles from './GlobalStyles';
import RedirectUrl from './Redirect/RedirectUrl';
import CreateLink from './NewLink/CreateLink';
import ShowUrl from './NewLink/ShowUrl';
import RecentLinks from './NewLink/RecentLinks';

import { colorPrimary, spacingBase } from './variables';

import logoSrc from './logo.svg';

const httpLink = createHttpLink({
  uri: '/api/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

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
    background: ${colorPrimary};
    top: ${spacingBase};
    left: ${spacingBase};
    right: ${spacingBase};
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

const App = () => (
  <Router>
    <ApolloProvider client={client}>
      <TinyUrls>
        <>
          <Normalize />
          <GlobalStyles />
          <Switch>
            <Route path="/" exact>
              <AppLayout>
                <Logo href="/" tabIndex="-1">
                  <img src={logoSrc} alt="logo" />
                </Logo>
                <CreateLink />
                <ShowUrl />
                <RecentLinks />
              </AppLayout>
            </Route>
            <Route path="/:id" component={RedirectUrl} />
          </Switch>
        </>
      </TinyUrls>
    </ApolloProvider>
  </Router>
);

export default App;

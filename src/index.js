import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import TinyUrls from './TinyUrls';
import App from './App';

import GlobalStyles from './ui/GlobalStyles';

import * as serviceWorker from './serviceWorker';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <TinyUrls>
        <>
          <Normalize />
          <GlobalStyles />
          <App />
        </>
      </TinyUrls>
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

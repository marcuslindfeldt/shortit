import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const TINYURL_QUERY = gql`
  query TinyUrl($id: ID!) {
    tinyurl(id: $id) {
      id
      url
    }
  }
`;

const redirect = url => {
  window.location.href = new URL(url).href;
  return null;
};

class RedirectUrl extends Component {
  render() {
    return (
      <Query query={TINYURL_QUERY} variables={{ id: this.props.match.params.id }}>
        {({ loading, error, data }) =>
          loading || error ? <div>redirecting...</div> : redirect(data.tinyurl.url)
        }
      </Query>
    );
  }
}

export default RedirectUrl;

import React from 'react';
import PropTypes from 'prop-types';
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

const RedirectUrl = ({ match }) => (
  <Query query={TINYURL_QUERY} variables={{ id: match.params.id }}>
    {({ loading, error, data }) =>
      loading || error ? <div>redirecting...</div> : redirect(data.tinyurl.url)
    }
  </Query>
);

RedirectUrl.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RedirectUrl;

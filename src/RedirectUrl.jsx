import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import InfoView from './InfoView';

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
    {({ loading, error, data }) => {
      if (loading) {
        return null;
      }

      if (error || !data.tinyurl) {
        return (
          <InfoView
            heading="Page not found"
            description={
              <>
                The link you followed does not exist. Go to <Link to="/">homepage</Link>.
              </>
            }
          />
        );
      }

      return redirect(data.tinyurl.url);
    }}
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

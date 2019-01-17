import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const TINYURL_QUERY = gql`
  query TinyUrl($id: ID!) {
    tinyurl(id: $id) {
      id
      url
    }
  }
`;

class Link extends Component {
  render() {
    return (
      <Query query={TINYURL_QUERY} variables={{ id: "Ag4HCA0K" }}>
        {({ loading, error, data }) =>
          loading || error ? (
            <div>loading...</div>
          ) : (
            (
              <div>
                {data.tinyurl.id} ({data.tinyurl.url})
              </div>
            )
          )
        }
      </Query>
    );
  }
}

export default Link;

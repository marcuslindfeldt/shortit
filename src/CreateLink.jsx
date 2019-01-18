import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { TinyUrlContext } from './TinyUrls';

const CREATE_LINK_MUTATION = gql`
  mutation createTinyUrlMutation($url: String!) {
    createTinyUrl(url: $url) {
      id
      url
    }
  }
`;

const createLink = (mutation, add) => async () => {
  const res = await mutation();

  add(res.data.createTinyUrl);
};

class CreateLink extends Component {
  state = {
    url: '',
  };

  render() {
    const { url } = this.state;
    return (
      <div>
        <input
          value={url}
          onChange={e => this.setState({ url: e.target.value })}
          type="text"
          placeholder="The URL for the link"
        />
        <TinyUrlContext.Consumer>
          {({ add }) => (
            <Mutation mutation={CREATE_LINK_MUTATION} variables={{ url }}>
              {mutation => <button onClick={createLink(mutation, add)}>Shorten</button>}
            </Mutation>
          )}
        </TinyUrlContext.Consumer>
      </div>
    );
  }
}

export default CreateLink;

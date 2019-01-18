import React, { Component } from 'react';
import { TinyUrlContext } from './TinyUrls';
import constructUrl from './constructUrl';

class ShowUrl extends Component {
  render() {
    return (
      <TinyUrlContext.Consumer>
        {({ newLink }) =>
          newLink ? (
            <a href={constructUrl(newLink.id)} target="_blank" rel="noopener noreferrer">
              {constructUrl(newLink.id)}
            </a>
          ) : null
        }
      </TinyUrlContext.Consumer>
    );
  }
}

export default ShowUrl;

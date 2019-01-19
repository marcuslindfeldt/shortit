import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const TinyUrlContext = React.createContext();

class TinyUrls extends Component {
  state = {
    newLink: null,
    recentLinks: [],
  };

  componentDidMount() {
    const links = window.localStorage.getItem('links');

    if (links) {
      this.setState({ recentLinks: JSON.parse(links) });
    }
  }

  add = newLink => {
    this.setState(prevState => {
      if (prevState.newLink) {
        return {
          newLink,
          recentLinks: [prevState.newLink, ...prevState.recentLinks].slice(0, 10),
        };
      }

      return { newLink };
    });

    const linksItem = window.localStorage.getItem('links');
    let links;

    if (linksItem) {
      links = JSON.parse(linksItem);
    } else {
      links = [];
    }

    links.push(newLink);

    window.localStorage.setItem('links', JSON.stringify(links));
  };

  render() {
    return (
      <TinyUrlContext.Provider
        value={{
          ...this.state,
          add: this.add,
        }}
      >
        {this.props.children}
      </TinyUrlContext.Provider>
    );
  }
}

TinyUrls.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TinyUrls;

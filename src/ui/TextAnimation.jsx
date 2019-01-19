import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

/* eslint-disable react/no-unused-state */

class TextAnimation extends Component {
  state = {
    saved: 0,
    characters: shortid(),
  };

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      // eslint-disable-next-line
      this.setState(
        {
          saved: 0,
          characters: shortid(),
        },
        () => this.animate()
      );
    }
  }

  animate() {
    // varje 100ms genereras alla osparade bokstaver random
    const randomInterval = window.setInterval(() => {
      this.setState(prevState => {
        const random = shortid.generate().substr(0, this.props.children.length);

        const savedChars = this.props.children.slice(0, prevState.saved);
        const randomChars = random.slice(prevState.saved, random.length);
        return {
          characters: savedChars + randomChars,
        };
      });
    }, 50);

    // varje 500ms sparas en bokstav
    const saveInterval = window.setInterval(() => {
      this.setState(prevState => {
        if (prevState.saved === this.props.children.length) {
          window.clearInterval(randomInterval);
          window.clearInterval(saveInterval);

          return {
            characters: this.props.children,
          };
        }
        return {
          saved: prevState.saved + 1,
        };
      });
    }, 200);
  }

  render() {
    return this.state.characters;
  }
}

TextAnimation.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TextAnimation;

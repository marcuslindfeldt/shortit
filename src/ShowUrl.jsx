import React, { Component } from 'react';
import styled from 'styled-components';
import Clippy from '@stagecraft/react-clippy';

import { TinyUrlContext } from './TinyUrls';
import TextAnimation from './ui/TextAnimation';

const Layout = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  width: 100%;
`;

const StyledLink = styled.p`
  font-family: Merriweather, serif;
  color: #000;
  margin: 0;
  text-decoration: none;
  margin-bottom: 1rem;
`;

const CopyButton = styled.button`
  background: #000;
  border: 0;
  min-width: 7rem;
  min-height: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;

  :focus {
    outline: 4px solid rgba(0, 0, 0, 0.2);
    outline-offset: 0;
  }
`;

class ShowUrl extends Component {
  render() {
    return (
      <TinyUrlContext.Consumer>
        {({ newLink }) =>
          newLink ? (
            <Layout>
              <Clippy>
                {setTrigger => (
                  <>
                    <StyledLink>
                      http://localhost:3000/<TextAnimation>{newLink.id}</TextAnimation>
                    </StyledLink>
                    <CopyButton
                      ref={el => setTrigger(el)}
                      data-clipboard-text={`http://localhost:3000/${newLink.id}`}
                    >
                      Copy
                    </CopyButton>
                  </>
                )}
              </Clippy>
            </Layout>
          ) : null
        }
      </TinyUrlContext.Consumer>
    );
  }
}

export default ShowUrl;

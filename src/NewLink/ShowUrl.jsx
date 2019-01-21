import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Clippy from '@stagecraft/react-clippy';

import { TinyUrlContext } from '../TinyUrls';
import TextAnimation from './TextAnimation';

import { colorBlack, colorWhite, spacingBase, spacingXXL } from '../variables';

const Layout = styled.div`
  text-align: center;
  margin-bottom: ${spacingBase};
  width: 100%;
`;
const StyledLink = styled.p`
  font-family: Merriweather, serif;
  color: ${colorBlack};
  margin: 0;
  text-decoration: none;
  margin-bottom: ${spacingBase};
`;

const CopyButton = styled.button`
  background: ${colorBlack};
  border: 0;
  min-width: 7rem;
  min-height: ${spacingXXL};
  font-weight: 600;
  text-transform: uppercase;
  color: ${colorWhite};
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
                      {window.location.origin}/<TextAnimation>{newLink.id}</TextAnimation>
                    </StyledLink>
                    <CopyButton
                      ref={el => setTrigger(el)}
                      data-clipboard-text={`${window.location.origin}/${newLink.id}`}
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

import React from 'react';
import styled from 'styled-components/macro';
import Clippy from '@stagecraft/react-clippy';
import PropTypes from 'prop-types';
import { rgba } from 'polished';

import { TinyUrlContext } from '../TinyUrls';

import {
  colorPrimary,
  colorWhite,
  colorGrey,
  colorBlack,
  spacingPico,
  spacingTiny,
  spacingBase,
  spacingLarge,
  spacingXL,
  spacingXXL,
  ms,
} from '../variables';

const List = styled.ul`
  margin: 0;

  padding: ${spacingLarge};
  background: ${colorWhite};
  width: 100%;
  min-height: 16rem;

  @media (min-width: 44rem) {
    margin-top: ${spacingXL};
    padding: ${spacingXXL};
    box-shadow: 0px 3px 12px -3px rgba(0, 0, 0, 0.2);
    max-width: 40rem;
  }
`;

const ListItem = styled.li`
  display: block;
  list-style-type: none;
  font-size: ${ms(1)};

  & + & {
    margin-top: ${spacingLarge};
  }
`;

const StyledLink = styled.a`
  font-size: ${ms(-1)};
  color: ${colorPrimary};
  margin: 0;
  text-decoration: none;
  margin-right: ${spacingBase};

  :hover,
  :focus {
    outline: 0;
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  font-size: ${ms(1)};
  display: block;
  text-decoration: none;
  color: ${colorGrey};
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  :hover,
  :focus {
    outline: 0;
    color: ${colorBlack};
  }
`;

const CopyButton = styled.button`
  font-size: ${ms(-2)};
  line-height: 1;
  padding: ${spacingPico} ${spacingTiny};
  font-weight: 600;
  background: ${colorPrimary};
  border: 0;
  color: ${colorWhite};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  box-shadow: 0 3px 8px -2px ${rgba(colorPrimary, 0.3)};
  min-width: 70px;
  margin-right: ${spacingBase};

  :hover,
  :focus {
    outline: 0;
    box-shadow: 0 3px 8px -2px ${rgba(colorPrimary, 0.7)};
    transform: translateY(-1px) scale(1.05);
  }
`;

const ShortLink = ({ id }) => (
  <Clippy>
    {setTrigger => (
      <>
        <CopyButton
          ref={el => setTrigger(el)}
          data-clipboard-text={`${window.location.origin}/${id}`}
        >
          Copy
        </CopyButton>
        <StyledLink
          href={`${window.location.origin}/${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {window.location.origin}/{id}
        </StyledLink>
      </>
    )}
  </Clippy>
);

ShortLink.propTypes = {
  id: PropTypes.string.isRequired,
};

export const LinkList = ({ links = [] }) =>
  links.length > 0 && (
    <List data-testid="link-list">
      {links.map(link => (
        <ListItem key={link.id}>
          <ExternalLink href={link.url} target="_blank" rel="noopener noreferrer">
            {link.url}
          </ExternalLink>
          <ShortLink id={link.id} />
        </ListItem>
      ))}
    </List>
  );

export default () => (
  <TinyUrlContext.Consumer>
    {({ recentLinks }) => <LinkList links={recentLinks} />}
  </TinyUrlContext.Consumer>
);

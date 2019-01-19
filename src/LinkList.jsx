import React from 'react';
import styled from 'styled-components';
import Clippy from '@stagecraft/react-clippy';

import { TinyUrlContext } from './TinyUrls';

const List = styled.ul`
  margin: 0;

  padding: 1.5rem;
  background: #fff;
  width: 100%;
  min-height: 16rem;

  @media (min-width: 44rem) {
    margin-top: 2rem;
    padding: 3rem;
    box-shadow: 0px 3px 12px -3px rgba(0, 0, 0, 0.2);
    max-width: 40rem;
  }
`;

const ListItem = styled.li`
  display: block;
  list-style-type: none;
  font-size: 20px;

  & + & {
    margin-top: 1.5rem;
  }
`;

const StyledLink = styled.a`
  font-size: 13px;
  color: #ffad38;
  margin: 0;
  text-decoration: none;
  margin-right: 1rem;

  :hover,
  :focus {
    outline: 0;
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  font-size: 20px;
  display: block;
  text-decoration: none;
  color: #666;
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  :hover,
  :focus {
    outline: 0;
    color: #000;
  }
`;

const CopyButton = styled.button`
  font-size: 12px;
  line-height: 1;
  padding: 4px 8px;
  font-weight: 600;
  background: #ffda38;
  border: 0;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  box-shadow: 0 3px 8px -2px rgba(255, 218, 56, 0.3);
  min-width: 70px;
  margin-right: 1rem;

  :hover,
  :focus {
    outline: 0;
    box-shadow: 0 3px 8px -2px rgba(255, 218, 56, 0.7);
    transform: translateY(-1px) scale(1.05);
  }
`;

const ShortLink = ({ id }) => (
  <Clippy>
    {setTrigger => (
      <>
        <CopyButton ref={el => setTrigger(el)} data-clipboard-text={`http://localhost:3000/${id}`}>
          Copy
        </CopyButton>
        <StyledLink href={`http://localhost:3000/${id}`} target="_blank" rel="noopener noreferrer">
          http://localhost:3000/{id}
        </StyledLink>
      </>
    )}
  </Clippy>
);

const LinkList = () => (
  <TinyUrlContext.Consumer>
    {({ recentLinks }) => (
      <List>
        {!recentLinks.length ? (
          <ListItem />
        ) : (
          recentLinks.map(link => (
            <ListItem key={link.id}>
              <ExternalLink href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </ExternalLink>
              <ShortLink id={link.id} />
            </ListItem>
          ))
        )}
      </List>
    )}
  </TinyUrlContext.Consumer>
);

export default LinkList;

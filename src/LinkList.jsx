import React from 'react';
import { TinyUrlContext } from './TinyUrls';
import constructUrl from './constructUrl';

const LinkList = () => (
  <section>
    <h3>Recent link</h3>
    <TinyUrlContext.Consumer>
      {({ recentLinks }) => (
        <ul>
          {recentLinks.map(link => (
            <li key={link.id}>
              <a href={constructUrl(link.id)} target="_blank" rel="noopener noreferrer">
                {constructUrl(link.id)}
              </a>
              <br />
              <small>{link.url}</small>
            </li>
          ))}
        </ul>
      )}
    </TinyUrlContext.Consumer>
  </section>
);

export default LinkList;

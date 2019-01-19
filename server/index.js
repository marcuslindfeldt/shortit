const { GraphQLServer } = require('graphql-yoga');
const shortid = require('shortid');
const express = require('express');
const path = require('path');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const typeDefs = `
type Query {
  tinyurl(id: ID!): TinyUrl
}

type Mutation {
  createTinyUrl(url: String!): TinyUrl!
}

type TinyUrl {
  id: ID!
  url: String!
}
`;

const urls = new Map();

urls.set('Ag4HCA0K', {
  id: 'Ag4HCA0K',
  url: 'www.marcuslindfeldt.se',
});

const resolvers = {
  Query: {
    tinyurl: (parent, { id }) => urls.get(id),
  },
  Mutation: {
    createTinyUrl: (parent, { url }) => {
      const id = shortid();
      const tinyurl = {
        id,
        url,
      };

      urls.set(id, tinyurl);

      return tinyurl;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

const options = {
  endpoint: '/api',
  subscriptions: '/api',
  playground: '/api',
};

// eslint-disable-next-line no-console
server.start(options, ({ port }) => console.log(`Server is running on http://localhost:${port}`));

server.express.use('/', express.static('build'));
server.express.use('/*', (req, res) => {
  res.sendFile(path.resolve('build/index.html'));
});

// Make sure uncaught exceptions are logged then crash
process.on('uncaughtException', err => {
  // eslint-disable-next-line no-console
  console.error(err, 'Uncaught exception');
  process.exit(1);
});

// Log unhandled rejections then crash
process.on('unhandledRejection', (reason, promise) => {
  // eslint-disable-next-line no-console
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

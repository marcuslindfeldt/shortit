const { GraphQLServer } = require('graphql-yoga');
const shortid = require('shortid');

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

// eslint-disable-next-line
server.start(() => console.log(`Server is running on http://localhost:4000`));

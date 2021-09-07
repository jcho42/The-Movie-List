const { gql } = require('apollo-server');

const query = gql`
  type Query {
    movies: [Movie]!
    movie(moviId: ID!): Movie
    user: User
  }
`;

module.exports = query;

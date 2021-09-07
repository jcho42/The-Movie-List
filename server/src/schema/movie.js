const { gql } = require('apollo-server');

const movie = gql`
  type Movie {
    id: ID!
    movieInfo: MovieInfo
    reviews: [Review]
    kanbanStatus: KanbanStatus
  }

  type MovieInfo {
    title: String!
    releaseDate: Date!
    rating: Float!
    genre: String!
    runtime: Int!
    tagline: String!
    overview: String!
    streamingServices: [StreamingService]!
    castCrew: CastCrew!
    seasons: [Season]
  }

  enum KanbanStatus {
    TO_WATCH
    IN_PROGRESS
    SUSPENDED
    FINISHED
  }
`;

module.exports = movie;

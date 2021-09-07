const { gql } = require('apollo-server');

const movieInfo = gql`
  type StreamingService {
    id: ID!
    name: String!
    logo: String!
  }

  type Review {
    id: ID!
    username: String!
    rating: Float!
    title: String!
    body: String!
    dataCreated: Date!
  }

  type Season {
    id: ID!
    seasonNumber: Int!
    episodes: [Episode]!
    poster: String
  }

  type Episode {
    id: ID!
    episodeNumber: Int!
    title: String!
    rating: Float!
    description: String
    releaseDate: Date!
    poster: String
  }

  type CastCrew {
    cast: [Cast]!
    crew: [Crew]!
  }

  type Cast {
    id: ID!
    name: String!
    episodeNums: [Int]
    characterName: String!
    picture: String
  }

  type Crew {
    id: ID!
    name: String!
    episodeNums: [Int]
    jobTitle: String!
    department: String
    picture: String
  }
`;

module.exports = movieInfo;

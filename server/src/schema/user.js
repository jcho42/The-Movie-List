const { gql } = require('apollo-server');

const user = gql`
  type User {
    id: ID!
    movies: [Movie]!
    accountInfo: AccountInfo
    accountSettings: AccountSettings
    streamingSettings: StreamingSettings
  }

  type AccountInfo {
    username: String!
    email: String!
    password: String!
    profilePic: String
    accentColor: String
  }

  type AccountSettings {
    defaultLanguage: String
    country: String
    timezone: String
  }

  type StreamingSettings {
    subscribed: [StreamingService]
  }
`;

module.exports = user;

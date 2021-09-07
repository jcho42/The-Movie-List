const { gql } = require('apollo-server');

const mutation = gql`
  type Mutation {
    login(email: String, password: String): User
    addMovie(movieId: ID!): MovieUpdateResponse!
    removeMovie(movieId: ID!): MovieUpdateResponse!
    addReview(movieId: ID!): ReviewUpdateResponse!
    removeReview(reviewId: ID!): ReviewUpdateResponse!
    editReview(reviewId: ID!): ReviewUpdateResponse!
    editEpisode(episodeId: ID!): EpisodeUpdateResponse!
    editAccountInfo(userId: ID!): AccountInfoUpdateResponse!
    editAccountSettings(userId: ID!): AccountSettingsUpdateResponse!
    addStreamingService(userId: ID!): StreamingUpdateResponse!
    removeStreamingService(userId: ID!): StreamingUpdateResponse!
  }

  type MovieUpdateResponse {
    success: Boolean!
    message: String
    movie: Movie
  }

  type ReviewUpdateResponse {
    success: Boolean!
    message: String
    review: Review
  }

  type EpisodeUpdateResponse {
    success: Boolean!
    message: String
    episode: Episode
  }

  type AccountInfoUpdateResponse {
    success: Boolean!
    message: String
    accountInfo: AccountInfo
  }

  type AccountSettingsUpdateResponse {
    success: Boolean!
    message: String
    accountSettings: AccountSettings
  }

  type StreamingUpdateResponse {
    success: Boolean!
    message: String
    streamingSettings: StreamingSettings
  }
`;

module.exports = mutation;

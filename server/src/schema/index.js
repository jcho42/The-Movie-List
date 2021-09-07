const { gql } = require('apollo-server');

const userSchema = require('./user');
const movieSchema = require('./movie');
const movieInfoSchema = require('./movieInfo');
const query = require('./query');
const mutation = require('./mutation');

const date = gql`
  scalar Date
`;

const combinedSchema = [
  date,
  userSchema,
  movieSchema,
  movieInfoSchema,
  query,
  mutation,
];

module.exports = combinedSchema;

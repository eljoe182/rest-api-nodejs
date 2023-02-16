const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO: {
    URI: process.env.MONGODB_URI || 'mongodb://localhost:27017',
    DATABASE: process.env.MONGODB_DATABASE || 'test',
  },
};

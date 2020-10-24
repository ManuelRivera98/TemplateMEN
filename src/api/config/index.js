require('dotenv').config();

const config = {
  port: process.env.PORT || 4000,
  dev: process.env.NODE_ENV !== 'production',
};

export default config;

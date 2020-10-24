import express from 'express';
// Config
import config from './config';

const app = express();

// Routes

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(config.port, (error) => {
  if (error) return console.log(error);

  console.log(`Listening on port http://localhost:${config.port}`);
});

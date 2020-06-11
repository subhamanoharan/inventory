import express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.json({ message: 'Hello World!' });
});

process.on('uncaughtException', (error) => {
  // eslint-disable-next-line
  console.error('uncaughtException', { error });
  process.exit(1);
});

process.on('unhandledRejection', (reason, p) => {
  // eslint-disable-next-line
  console.error('unhandledRejection', { reason, p });
  process.exit(1);
});

export default app;

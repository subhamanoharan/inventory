import express from 'express';
import * as bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.json({message: "Hello World!"});
});

process.on('uncaughtException', function(error) {
  console.error('uncaughtException', {error});
  process.exit(1)
});

process.on('unhandledRejection', function(reason, p){
   console.error('unhandledRejection', {reason, p});
   process.exit(1)
});

export default app;

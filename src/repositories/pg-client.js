import { Client } from 'pg';
import config from 'config';

const getPgClient = () => new Client(config.DATABASE);

const query = async (queryStatement, values) => {
  const client = getPgClient();
  await client.connect();
  const result = await client.query(queryStatement, values).catch(async (error) => {
    await client.end();
    // eslint-disable-next-line
    console.log('Db error occured', error.message);
    return Promise.reject(error);
  });
  await client.end();
  return result;
};

export default query;

import config from 'config';
import app from './app';

app.listen(config.PORT, () => {
  // eslint-disable-next-line
  console.log('App listening on port-', config.PORT);
});

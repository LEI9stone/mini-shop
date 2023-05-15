import Hapi from '@hapi/hapi';
import appConfig from './config/index.js';
import helloHapi from './routes/hello-hapi.js';
import test from './routes/test.js';

const init = async () => {
  const server = Hapi.server({ ...appConfig });

  server.route([helloHapi, test]);

  await server.start();

  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

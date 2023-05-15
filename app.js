import Hapi from '@hapi/hapi';
import appConfig from './config/index.js';
import pluginsHapiSwagger from './config/hapi-swagger.js';
import helloHapi from './routes/hello-hapi.js';
import test from './routes/test.js';

// console.log('pluginsHapiSwagger', pluginsHapiSwagger);

const init = async () => {
  const server = Hapi.server({ ...appConfig });

  await server.register([...pluginsHapiSwagger]);
  await server.start();

  server.route([helloHapi, test]);

  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();


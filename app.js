import Hapi from '@hapi/hapi';
import appConfig from './config/index.js';
import pluginsHapiSwagger from './config/hapi-swagger.js';
import shop from './routes/shops.js';

const init = async () => {
  const server = Hapi.server({ ...appConfig });

  await server.register([...pluginsHapiSwagger]);
  await server.start();

  server.route([...shop]);

  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();


import Hapi from '@hapi/hapi';
import appConfig from './config/index.js';
import pluginsHapiSwagger from './config/hapi-swagger.js';
import shop from './routes/shops.js';
import base from './routes/base.js';
import orders from './routes/orders.js'

const init = async () => {
  const server = Hapi.server({ ...appConfig });
  await server.register([...pluginsHapiSwagger]);
  server.route([...base, ...shop, ...orders]);
  await server.start();

  console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
init();


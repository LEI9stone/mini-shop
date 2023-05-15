import 'dotenv/config';
const {env} = process.env;
export default {
  host: env.HOST,
  port: env.PORT
}
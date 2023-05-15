import 'dotenv/config';
const { env } = process;
export default {
  host: env.HOST,
  port: env.PORT
}
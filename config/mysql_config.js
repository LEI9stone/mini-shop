import 'dotenv/config';
const { env } = process;

export default {
  "development": {
    "username": env.MYSQL_USERNAME,
    "password": env.MYSQL_PASSWORD,
    "database": "mini_shop_dev",
    "host": env.MYSQL_HOST,
    "dialect": "mysql",
    "timezone": "+08:00",
    "charset": "utf8",
    define: {
      underscored: true,
    }
  },
  "test": {
    "username": env.MYSQL_USERNAME,
    "password": env.MYSQL_PASSWORD,
    "database": "mini_shop_test",
    "host": env.MYSQL_HOST,
    "dialect": "mysql",
    "timezone": "+08:00",
    "charset": "utf8",
    define: {
      underscored: true,
    }
  },
  "production": {
    "username": env.MYSQL_USERNAME,
    "password": env.MYSQL_USERNAME,
    "database": "mini_shop_pro",
    "host": env.MYSQL_HOST,
    "dialect": "mysql",
    "timezone": "+08:00",
    "charset": "utf8",
    define: {
      underscored: true,
    }
  }
}
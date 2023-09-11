import "dotenv/config";
const { env } = process;

export default {
  development: {
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
    database: "mini_shop_dev",
    host: env.MYSQL_HOST,
    dialect: "mysql",
    timezone: "+08:00",
    charset: "utf8",
    define: {
      underscored: true,
    },
    //配置
    dialectOptions: {
      // 时间格式化，返回字符串
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
  },
  test: {
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_PASSWORD,
    database: "mini_shop_test",
    host: env.MYSQL_HOST,
    dialect: "mysql",
    timezone: "+08:00",
    charset: "utf8",
    define: {
      underscored: true,
    },
    //配置
    dialectOptions: {
      // 时间格式化，返回字符串
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
  },
  production: {
    username: env.MYSQL_USERNAME,
    password: env.MYSQL_USERNAME,
    database: "mini_shop_pro",
    host: env.MYSQL_HOST,
    dialect: "mysql",
    timezone: "+08:00",
    charset: "utf8",
    define: {
      underscored: true,
    },
    //配置
    dialectOptions: {
      // 时间格式化，返回字符串
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
  },
};

import fs from 'node:fs';
import { Sequelize } from 'sequelize';
import process from 'node:process';
import mysqlConfig from '../config/mysql_config.js';

const basename = 'index.js';
const env = process.env.NODE_ENV || "development";
const config = mysqlConfig[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const files = fs.readdirSync('models').filter((file) => {
  return (
    file.indexOf(".") !== 0 &&
    file !== basename &&
    file.slice(-3) === ".js" &&
    file.indexOf(".test.js") === -1
  );
});

for (let i =0; i<files.length; i++) {
  const model = await import(`./${files[i]}`).then((fn) => {
    return fn.default(sequelize, Sequelize.DataTypes)
  });
  db[model.name] = model;
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
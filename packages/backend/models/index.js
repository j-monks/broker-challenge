import dbConfig from '../config/db-config.js';
import { Sequelize } from 'sequelize';
import Policy from './policy.js';

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
});

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Policy = Policy(sequelize, Sequelize.DataTypes);

export default db;
const { Sequelize } = require("sequelize");
const initModels = require("./init-models");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: { ssl: { rejectUnauthorized: false } }
});

module.exports = initModels(sequelize);
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    define: {
        timestamps: false,
    },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Categories = require("./Categories.model.js")(sequelize, Sequelize);
db.Brands = require("./Brands.model.js")(sequelize, Sequelize);
db.Cars = require("./Cars.model.js")(sequelize, Sequelize);
db.Orders = require("./Orders.model.js")(sequelize, Sequelize);
db.Users = require("./auth.model.js")(sequelize, Sequelize);
db.Brands.hasMany(db.Cars);
db.Categories.hasMany(db.Cars);
db.Cars.hasMany(db.Orders);
module.exports = db;

const sequelize = require("../config/db");
const User = require("./user");
const Book = require("./book");

sequelize.sync();

module.exports = { User, Book };

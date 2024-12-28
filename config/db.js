const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const createTables = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection established successfully.");
  
      await sequelize.sync({ force: false });
      console.log("Tables created successfully!");
    } catch (err) {
      console.error("Unable to connect to the database:", err);
    }
  };
  
  createTables();
  

module.exports = sequelize;

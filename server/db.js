// import sequelized package
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    // supplying info to connect to database
    host: "localhost",
    dialect: "postgres",
  }
);

// now we need to authenticate, testing the connection
sequelize
  .authenticate() // returns a promise
  .then(() => console.log("postgres database is connected")) // promise resolver
  .catch((err) => console.log(err));

// export module to be able to access it in our other files
module.exports = sequelize;

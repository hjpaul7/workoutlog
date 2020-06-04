module.exports = (sequelize, DataTypes) => {
  // sequelize and datatypes are parameters
  const User = sequelize.define("user", {
    // user is the table we're creating
    username: {
      type: DataTypes.STRING,
      allowNull: false, // what the table headers will be called and
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return User;
};

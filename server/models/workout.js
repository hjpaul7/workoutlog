module.exports = (sequelize, DataTypes) => {
  const Workout = sequelize.define("workout", {
    // table name will be "pie"
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    definition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    result: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Workout;
};

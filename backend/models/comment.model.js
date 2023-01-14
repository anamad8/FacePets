
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  });

  return Comment
}
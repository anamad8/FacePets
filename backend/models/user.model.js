module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    petName: {
      type: DataTypes.STRING,
    },
    petAge:{
      type: DataTypes.INTEGER
    },
    gender:{
      type:DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          msg: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        },
      },
    },
    breed: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    imageBanner: {
      type: DataTypes.TEXT,
      defaultValue: null,
    }
    ,
    role: {
      type: DataTypes.INTEGER,
    },
  });
  

  return User;
};

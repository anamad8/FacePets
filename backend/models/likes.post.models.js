module.exports = (sequelize, DataTypes) => {
    const LikesPost = sequelize.define("likesPost", {
      status:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  
    return LikesPost
}
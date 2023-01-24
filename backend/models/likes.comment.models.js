module.exports = (sequelize, DataTypes) => {
    const LikesComment = sequelize.define("likesComment", {
      status:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  
    return LikesComment
}
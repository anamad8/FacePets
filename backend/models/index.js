const dbConfig = require("../config/database/config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user.model.js")(sequelize, DataTypes);
db.post = require("./post.model.js")(sequelize, DataTypes);
db.comment = require("./comment.model.js")(sequelize, DataTypes);


db.sequelize.sync({ force: false }).then(() => {
  console.log("sincronizacion correcta");
});

// 1 to Many Relation

db.user.hasMany(db.post, {
  foreignKey: "user_id",
  as: "post",
});

db.post.belongsTo(db.user, {
  foreignKey: "user_id",
  as: "user",
});

db.user.hasMany(db.comment, {
    foreignKey: "user_id",
    as: "comment",
  });
  
  db.comment.belongsTo(db.user, {
    foreignKey: "user_id",
    as: "user",
  });
  db.post.hasMany(db.comment, {
    foreignKey: "post_id",
    as: "comment",
  });
  
  db.comment.belongsTo(db.post, {
    foreignKey: "post_id",
    as: "post",
  });

module.exports = db;

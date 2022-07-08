const { Sequelize, Model, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const sequelize = new Sequelize('sqlite::memory:');
const db = {}
const filePath = __dirname + "/model";
fs
  .readdirSync(filePath)
  .filter((file) => {
    const returnFile = (file.indexOf('.') !== 0)
      && (file.slice(-3) === '.js');
    return returnFile;
  })
  .forEach((file) => {
    const model = require(path.join(filePath, file))(sequelize, DataTypes)
    db[model.name] = model;
  });


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const sequelizeOptions = { logging: console.log, };


// sequelize.sync(sequelizeOptions)
//   .then(()=> {
//       console.log("Sync Done")
//   })  
//   .catch((err) => {
//     console.log(err);
//     process.exit();
//   });

module.exports = db;
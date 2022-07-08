const db = require('./model-loader')
console.log(db.User)


const payload = {
  module: "Role",
  //action: "" // CREATE / DELETE / UPDATE
  data: {
    username: 'welcome',
    isadmin: true
  }
}


db.sequelize.sync()
  .then(()=> {
      console.log("Sync Done")

      db[payload.module].create(payload.data).then(() => {
        console.log("create");
        db.Role.findAll().then(console.log)
            .catch(console.log);
      })
      .catch(console.log);

  })  
  .catch((err) => {
    console.log(err);
    process.exit();
  });
const SequelizeAuto = require('sequelize-auto');
const Sequelize = require('sequelize');

// const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize('postgres://postgres:precis@10.1.238.20:5432/testdb');
const options = { caseFile: 'l', caseModel: 'p', caseProp: 'c' };

const auto = new SequelizeAuto(sequelize, null, null, options);
auto.run().then(console.log).catch(console.log);

const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto('database', 'user', 'pass');

auto.run().then(data => {
  console.log(data.tables);      // table and field list
  console.log(data.foreignKeys); // table foreign key list
  console.log(data.indexes);     // table indexes
  console.log(data.hasTriggerTables); // tables that have triggers
  console.log(data.relations);   // relationships between models
  console.log(data.text)         // text of generated models
});
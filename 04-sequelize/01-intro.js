/*
Sequelize
Sequelize is a modern TypeScript and Node.js ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.

Sequelize Auto https://github.com/sequelize/sequelize-auto
https://sequelize.org/docs/v6/other-topics/resources/
*/

const { Sequelize, Model, DataTypes } = require('sequelize');
const { INSERT } = require('sequelize/types/query-types');

const sequelize = new Sequelize('sqlite::memory:');

//     Part - A
//        1- Create Table (TEST.....N) 
//        2- INSERT Data 
//     Part - B
//         - Request -> In module process -> Create Table and Write data - TEST1 (1 -- 5 days - 10 days)
//         - Request -> In module process -> Create Table and Write data - TEST2

//         TEST1 -> No Data
//     PART - CDATASection
//     Restart Service
//         - Bootstrap and init old table from table info

// table_info
// table name | 



(async () => {

    const schema = {
        username: DataTypes.STRING,
        birthday: DataTypes.DATE,
      };

    console.log(JSON.stringify(schema),DataTypes.STRING);


    try {

        // To create a table
        const User = await sequelize.define('User', schema).sync();
    
    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20),
      });
      
      const users = await User.findAll();
    
      console.log(users)
        
    } catch (error) {
        console.log(error)
    }
    
})()
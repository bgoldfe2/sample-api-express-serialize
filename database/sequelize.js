const Sequelize = require('sequelize');

const user = 'postgres';
const host = 'localhost';
const database = 'postgres';
const password = 'admin';
const port = '5432';

test = new Sequelize(database, user, password, {
    host,
    port,
    dialect: 'postgres',
    logging: console.log,
    define: {
        schema: 'vets'
      }
  });

module.exports = test;

test
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});
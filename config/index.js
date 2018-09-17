const database = require('./database');

const server = require('./server');

module.exports = {
    database,
    appConfig : server
}
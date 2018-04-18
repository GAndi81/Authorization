const host = 'localhost';
const port = 27017;
const user = 'USERFORTESTDB';
const password = 'USERPASSWORD';
const database = 'TESTDB';

module.exports = {
    uri: `mongodb://${user}:${password}@${host}:${port}/${database}`,
    options: {
        connectTimeoutMS: 2000,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 500
    }
}
const { connectMongoDB } = require('./mongodb');
const { connectMySQL } = require('./mysql');

module.exports = {
  connect: function(databaseType) {
    switch (databaseType.toLowerCase()) {
      case 'mongodb':
        connectMongoDB();
        break;
      case 'mysql':
        connectMySQL();
        break;
      default:
        console.error(`Unsupported database type: ${databaseType}`);
    }
  }
};

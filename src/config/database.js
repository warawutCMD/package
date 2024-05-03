module.exports = {

    MySQL: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        database: process.env.DB_DATABASE,
    },

    MongoDB: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,
        host: process.env.MONGO_HOST,
        port: process.env.MONGO_PORT || 27017,
        database: process.env.MONGO_DB,
        uri: process.env.MONGO_URI,
    },
};
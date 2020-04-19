const dotenv  = require('dotenv')
const http = require("http");
const mongoose = require('mongoose');

mongoose.set('debug', true);

const {
    connectToDb, isConnectionOpen  
 } = require('./src/DB/connection');

dotenv.config();

const app = require('./src/app');
const port = process.env.PORT || 4000;

const server = http.Server(app);

server.listen(port, () => {
    console.log("Server is up and running");
});

connectToDb();

isConnectionOpen();

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log("MongoDB connection is disconnected")
    server.close();
    });
});

const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const mongoDbUrl = process.env.DB_URL

const connectToDb = async () => {
    await mongoose.connect(mongoDbUrl,
    { useNewUrlParser: true, useUnifiedTopology: true });
}

const isConnectionOpen = () => {
    mongoose.connection
        .once('open', async () =>  console.log("MongoDb connection is open"))
        .on('error', (err) => console.log(err));
}

module.exports = {
    connectToDb,
    isConnectionOpen
}
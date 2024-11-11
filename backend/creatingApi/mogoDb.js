const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function dbConnect() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
        const db = client.db('demodb');
        return db.collection('employee');
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}

// Export dbConnect function for use in other modules
module.exports = dbConnect;

import 'dotenv/config'; 
import { MongoClient } from 'mongodb';


// declare a variable to access protected data 
 const uri = process.env.MONGO_URL;


 //check if the variable is correct and set if not throw an error //
 
if (!uri) {
    throw new Error("MONGO_URL environment variable is not set")
}

// set a time for how long connection should take and log the variable  
const client = new MongoClient(uri, {
  connectTimeoutMS: 10000,  // 10 seconds
  socketTimeoutMS: 45000    // 45 seconds
});
console.log('MONGO_URL:',process.env.MONGO_URL);

// declare an async function that waits for a connection to database cluster and wrap a try and catch block on it ///
async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB");

    // Optionally, you can list databases to ensure connection
    const databases = await client.db().admin().listDatabases();
    console.log("Databases:", databases.databases);

  } catch (error) {
    console.error("Connection error:", error);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

run().catch(console.error);
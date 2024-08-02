import 'dotenv/config'; 
import { MongoClient } from 'mongodb';

 const uri = process.env.MONGO_URL;

if (!uri) {
    throw new Error("MONGO_URL environment variable is not set")
}

const client = new MongoClient(uri);
console.log('MONGO_URL:', process.env.MONGO_URL);

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
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://timothy_itayi:0MB0IRKLAy3f1FFc@cluster0.s2az4ev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

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
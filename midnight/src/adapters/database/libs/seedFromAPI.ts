import 'dotenv/config'; 
import axios from 'axios';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL;

if (!uri) {
    throw new Error("MONGO_URL environment variable is not set")
}
const client = new MongoClient(uri);
console.log('MONGO_URL:', process.env.MONGO_URL);

async function seed() {
  try {
    // Fetch data from the API
    const response = await axios.get('https://dummyjson.com/carts');
    const carts = response.data.carts;

    await client.connect();
    const db = client.db('Dummy_Json'); 
    const collection = db.collection('carts'); 

    // Insert data into MongoDB
    await collection.insertMany(carts);

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await client.close();
  }
}

seed().catch(console.error);

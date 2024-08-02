import axios from 'axios';
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://timothy_itayi:0MB0IRKLAy3f1FFc@cluster0.s2az4ev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function seed() {
  try {
    // Fetch data from the API
    const response = await axios.get('https://dummyjson.com/products');
    const products = response.data.products;

    await client.connect();
    const db = client.db('sample_mflix'); 
    const collection = db.collection('products'); 

    // Insert data into MongoDB
    await collection.insertMany(products);

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await client.close();
  }
}

seed().catch(console.error);

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { MongoClient } from 'mongodb';
const uri = "mongodb+srv://timothy_itayi:0MB0IRKLAy3f1FFc@cluster0.s2az4ev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch data from the API
            const response = yield axios.get('https://dummyjson.com/products');
            const products = response.data.products;
            yield client.connect();
            const db = client.db('sample_mflix'); // Replace with your database name
            const collection = db.collection('products'); // Replace with your collection name
            // Insert data into MongoDB
            yield collection.insertMany(products);
            console.log("Data inserted successfully");
        }
        catch (error) {
            console.error("Error seeding data:", error);
        }
        finally {
            yield client.close();
        }
    });
}
seed().catch(console.error);

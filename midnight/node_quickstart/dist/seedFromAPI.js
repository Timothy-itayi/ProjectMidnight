var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import 'dotenv/config';
import axios from 'axios';
import { MongoClient } from 'mongodb';
const uri = process.env.MONGO_URL;
if (!uri) {
    throw new Error("MONGO_URL environment variable is not set");
}
const client = new MongoClient(uri);
console.log('MONGO_URL:', process.env.MONGO_URL);
function seed() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch data from the API
            const response = yield axios.get('https://dummyjson.com/carts');
            const carts = response.data.carts;
            yield client.connect();
            const db = client.db('Dummy_Json');
            const collection = db.collection('carts');
            // Insert data into MongoDB
            yield collection.insertMany(carts);
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

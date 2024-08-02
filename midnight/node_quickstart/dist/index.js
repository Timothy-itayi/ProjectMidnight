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
import { MongoClient } from 'mongodb';
const uri = process.env.MONGO_URL;
if (!uri) {
    throw new Error("MONGO_URL environment variable is not set");
}
const client = new MongoClient(uri);
console.log('MONGO_URL:', process.env.MONGO_URL);
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Successfully connected to MongoDB");
            // Optionally, you can list databases to ensure connection
            const databases = yield client.db().admin().listDatabases();
            console.log("Databases:", databases.databases);
        }
        catch (error) {
            console.error("Connection error:", error);
        }
        finally {
            yield client.close();
            console.log("Connection closed");
        }
    });
}
run().catch(console.error);

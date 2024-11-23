import { MongoClient } from 'mongodb';

export default async function connectToDatabase(): Promise<MongoClient> {
    if (!process.env.MONGO_DB_URI) {
        throw new Error('Error: MONGO_DB_URI is not defined');
    }

    const uri: string = process.env.MONGO_DB_URI;
    const options: Object = {};
    const client: MongoClient = new MongoClient(uri, options);

    return client.connect();
}

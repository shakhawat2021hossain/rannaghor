import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

let client;
let clientPromise;

if (!uri) {
    throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

const dbConnect = async(collectionName) =>{
    try {
        const client = await clientPromise;
        const db = client.db('rannaghor'); 
        return db.collection(collectionName); 
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}

export default dbConnect;

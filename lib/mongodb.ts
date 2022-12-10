// Todo.

import {MongoClient} from "mongodb";

const connectionString = process.env.BLUEPRINT_MONGODB_CONNECTION_STRING || "";

let client = null;
let database: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    // Fixme: global._database type?
    // if (!global._database) {
    //     client = new MongoClient(connectionString);
    //     global._database = client.connect();
    // }
    // database = global._database;
} else {
    client = new MongoClient(connectionString);
    database = client.connect();
}

export default database;

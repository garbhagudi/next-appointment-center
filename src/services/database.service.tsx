// External Dependencies
import * as mongoDB from "mongodb";
//import * as dotenv from "dotenv";

// Global Variables
export const Appointment_DB_C: { Appointment_DB?: mongoDB.Collection } = {};
export const Department_DB_C: { Department_DB?: mongoDB.Collection } = {};
export const Doctor_DB_C: { Doctor_DB?: mongoDB.Collection } = {};
export const Leads_DB_C: { Leads_DB?: mongoDB.Collection } = {};
export const Location_DB_C: { Location_DB?: mongoDB.Collection } = {};
export const Patient_DB_C: { Patient_DB?: mongoDB.Collection } = {};
export const User_DB_C: { User_DB?: mongoDB.Collection } = {};

// // Initialize Connection
// export async function connectToDatabase () {
//     dotenv.config();

//     const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

//     await client.connect();

//     const db: mongoDB.Db = client.db(process.env.DB_NAME);

//     const gamesCollection: mongoDB.Collection = db.collection(//process.env.GAMES_COLLECTION_NAME);

//   //collections.games = gamesCollection;

//          console.log(`Successfully connected to database: ${db.databaseName} and collection: ${//gamesCollection.collectionName}`);
//  }

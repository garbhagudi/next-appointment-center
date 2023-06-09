// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";


// Global Variables
export const Appointment_DB: { Appointment_DB?: mongoDB.Collection } = {};
export const Department_DB: { Department_DB?: mongoDB.Collection } = {};
export const Doctor_DB: { Doctor_DB?: mongoDB.Collection } = {};
export const Leads_DB: { Leads_DB?: mongoDB.Collection } = {};
export const Location_DB: { Location_DB?: mongoDB.Collection } = {};
export const Patient_DB: { Patient_DB?: mongoDB.Collection } = {};
export const User_DB: { User_DB?: mongoDB.Collection } = {};


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
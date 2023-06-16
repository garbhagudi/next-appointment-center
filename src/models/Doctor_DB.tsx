//External dependencies
import 'mongoose';
import { ObjectId } from 'mongodb';
const { model, Schema } = require('mongoose');
// Class Implementation
const doctorSchema = new Schema({
  id: Object,
  Name: String,
  Mobile_Number: Number,
  Email: String,
  Department: String,
  Gender: String,
  Medical_ID: String,
  Medical_Council: String,
  Experience: Number,
  Consultation_Type: [Schema.Types.mixed],
  Qualification: String,
});

module.exports = model('Doctordb', doctorSchema);

// export default class Doctor_DB {
//   constructor(
//     public name: string,
//     public Mobile_Number: number,
//     public email: string,
//     public Department: string,
//     public Gender: string,
//     public Medical_ID: number,
//     public Medical_Council: string,
//     public Experience: number,
//     public Consultation_Type: string[],
//     public qualification: string[],
//     public id?: ObjectId
//   ) {}
// }

//External dependencies
import { ObjectId } from 'mongodb';
const { model, Schema } = require('mongoose');

// Class Implementation
const patientSchema = new Schema({
  id: Object,
  Name: String,
  Age: Number,
  Mobile_Number: Number,
  Address: String,
});

module.exports = model('Patient', patientSchema);

// export default class Patient_DB {
//   constructor(
//     public Name: string,
//     public age: number,
//     public Mobile_no: number,
//     public id?: ObjectId
//   ) {}
// }

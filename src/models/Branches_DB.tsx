//External dependencies
import { ObjectId } from 'mongodb';
const { model, Schema } = require('mongoose');

// Class Implementation
const branchSchema = new Schema({
  id: Object,
  Name: String,
  Address: String,
});

module.exports = model('Branch', branchSchema);

// export default class Appointment_DB {
//   constructor(
//     public name: string,
//     public Address: string,
//     public id?: ObjectId
//   ) {}
// }

//External dependencies
import { ObjectId } from 'mongodb';
const { model, Schema } = require('mongoose');

// Class Implementation
const locationSchema = new Schema({
  id: Object,
  Name: String,
  Address: String,
});

module.exports = model('Location', locationSchema);

// export default class Appointment_DB {
//   constructor(
//     public name: string,
//     public Address: string,
//     public id?: ObjectId
//   ) {}
// }

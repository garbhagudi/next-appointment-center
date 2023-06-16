//External dependencies
import { ObjectId } from 'mongodb';
const { model, Schema } = require('mongoose');
// Class Implementation
const userSchema = new Schema({
  id: Object,
  Name: String,
  Mobile_Number: Number,
  Type: String,
  Email: String,
  Location: String,
});

module.exports = model('User', userSchema);
// export default class User_DB {
//   constructor(
//     public Name: string,
//     public Mobile_Number: number,
//     public Type: string,
//     public email: string,
//     public Location: string,
//     public id?: ObjectId
//   ) {}
// }

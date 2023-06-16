//External dependencies
import { ObjectId } from 'mongodb';
const { model, Schema } = require('mongoose');

// Class Implementation
const departmentSchema = new Schema({
  id: Object,
  Name: String,
});

module.exports = model('Department', departmentSchema);
// export default class Department_DB {
//   constructor(public name: string, public id?: ObjectId) {}

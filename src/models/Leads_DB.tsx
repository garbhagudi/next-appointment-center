//External dependencies
import { ObjectId } from 'mongodb';
const { model, Schema } = require('mongoose');
// Class Implementation

const leadsSchema = new Schema({
  id: Object,
  Type: String,
  Name: String,
});

module.exports = model('Lead', leadsSchema);
// export default class Leads_DB {
//   constructor(public type: string, public name: string, public id?: ObjectId) {}
// }

//External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class Leads_DB {
  constructor(public type: string, public name: string, public id?: ObjectId) {}
}

//External dependencies
import { ObjectId } from 'mongodb';

// Class Implementation
export default class Department_DB {
  constructor(public name: string, public id?: ObjectId) {}
}

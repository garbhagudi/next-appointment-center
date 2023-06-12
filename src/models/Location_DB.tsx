//External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class Appointment_DB {
  constructor(
    public name: string,
    public Address: string,
    public id?: ObjectId
  ) {}
}

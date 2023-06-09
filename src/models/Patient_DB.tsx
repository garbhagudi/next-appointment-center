//External dependencies
import {ObjectId} from "mongodb";

// Class Implementation
export default class Patient_DB{
    constructor(public Name: string, public age: number, public Mobile_no: number, public id?: ObjectId) {}
}
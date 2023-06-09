//External dependencies
import {ObjectId} from "mongodb";

// Class Implementation
export default class User_DB{
    constructor(public Name: string, public Mobile_Number: number,public Type: string ,public email: string, 
        public Location: string,public id?: ObjectId) {}}
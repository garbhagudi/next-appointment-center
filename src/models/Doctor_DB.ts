//External dependencies
import {ObjectId} from "mongodb";

// Class Implementation
export default class Doctor_DB{
    constructor(public name: string, public Mobile_Number: number, public email: string,public Department: string,
        public Gender: string, public Medical_ID: number,public Medical_Council: string,public Experience: number,
        public Consultation_Type: string[],public qualification: string[],public id?: ObjectId) {}}
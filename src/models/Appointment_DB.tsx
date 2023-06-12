//External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class Appointment_db {
  constructor(
    public Doctor_Name: string,
    public Start_Time: Date,
    public End_Time: Date,
    public Consultation_Type: string,
    public Patient_Name: string,
    public schema: any,
    public id?: ObjectId
  ) {}
}

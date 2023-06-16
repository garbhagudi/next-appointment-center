//External dependencies
import { ObjectId } from 'mongodb';
const { model, Schema } = require('mongoose');
// Class Implementation
const appointmentSchema = new Schema({
  id: Object,
  Doctor_Name: String,
  Start_Time: Date,
  End_Time: Date,
  Consultation_Type: String,
  Patient_Name: String,
  image: { data: Buffer, contentType: String },
});

module.exports = model('Appointment', appointmentSchema);

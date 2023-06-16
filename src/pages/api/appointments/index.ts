import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Appointmenthandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await clientPromise;
  const db = client.db('Appointment_db');

  if (req.method === 'GET') {
    try {
      const appointments = await db
        .collection('appointments') // collection name
        .find({})
        .toArray();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving appointments' });
    }
  } else if (req.method === 'POST') {
    try {
      const {
        id,
        Doctor_Name,
        Start_Time,
        End_Time,
        Consultation_Type,
        Patient_Name,
        image,
      } = req.body;

      // Perform any necessary validation or data manipulation before inserting into the database

      const appointment = {
        id,
        Doctor_Name,
        Start_Time,
        End_Time,
        Consultation_Type,
        Patient_Name,
        image,
      };

      const result = await db.collection('appointments').insertOne(appointment);
      const insertedId = result.insertedId;

      const insertedAppointment = await db
        .collection('appointments')
        .findOne({ _id: insertedId });
      res.status(201).json(insertedAppointment);
    } catch (error) {
      res.status(500).json({ message: 'Error creating appointment' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

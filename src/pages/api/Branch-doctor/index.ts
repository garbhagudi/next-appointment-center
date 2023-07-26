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
        .collection('branch_doctor') // collection name
        .find({})
        .toArray();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving branch doctor' });
    }
  } else if (req.method === 'POST') {
    try {
      const {
        id,
        doctorName,
        department,
        selectedOptions,
        inputValues,
      } = req.body;

      // Perform any necessary validation or data manipulation before inserting into the database

      const appointment = {
        id,
        doctorName,
        department,
        selectedOptions,
        inputValues,
      };

      const result = await db.collection('branch_doctor').insertOne(appointment);
      const insertedId = result.insertedId;

      const insertedAppointment = await db
        .collection('branch_doctor')
        .findOne({ _id: insertedId });
      res.status(201).json(insertedAppointment);
    } catch (error) {
      res.status(500).json({ message: 'Error creating branch doctor' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
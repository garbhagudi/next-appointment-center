import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Doctorhandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await clientPromise;
  const db = client.db('Appointment_db');

  if (req.method === 'GET') {
    try {
      const doctors = await db
        .collection('Doctor_db') // collection name
        .find({})
        .toArray();
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving Doctor data' });
    }
  } else if (req.method === 'POST') {
    try {
      const {
        id,
        Name,
        Mobile_Number,
        Email,
        Department,
        Gender,
        Medical_ID,
        Medical_Council,
        Experience,
        Consultation_Type,
        Qualification,
        Username,
        Bio,
      } = req.body;

      // Perform any necessary validation or data manipulation before inserting into the database

      const doctor = {
        id,
        Name,
        Mobile_Number,
        Email,
        Department,
        Gender,
        Medical_ID,
        Medical_Council,
        Experience,
        Consultation_Type,
        Qualification,
        Username,
        Bio,
      };

      const result = await db.collection('Doctor_db').insertOne(doctor);
      const insertedId = result.insertedId;

      const insertedDoctor = await db
        .collection('Doctor_db')
        .findOne({ _id: insertedId });
      res.status(201).json(insertedDoctor);
    } catch (error) {
      res.status(500).json({ message: 'Error creating Doctor' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

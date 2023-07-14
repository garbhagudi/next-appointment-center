import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Patienthandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await clientPromise;
  const db = client.db('Patient_db');

  if (req.method === 'GET') {
    try {
      const patients = await db
        .collection('patient') // collection name
        .find({})
        .toArray();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving patient data' });
    }
  } else if (req.method === 'POST') {
    try {
      const { id, Name, Age, Mobile_Number, Address } = req.body;

      // Perform any necessary validation or data manipulation before inserting into the database

      const patient = {
        id,
        Name,
        Age,
        Mobile_Number,
        Address,
      };

      const result = await db.collection('Patient_db').insertOne(patient);
      const insertedId = result.insertedId;

      const insertedPatient = await db
        .collection('Patient_db')
        .findOne({ _id: insertedId });
      res.status(201).json(insertedPatient);
    } catch (error) {
      res.status(500).json({ message: 'Error creating Patient data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

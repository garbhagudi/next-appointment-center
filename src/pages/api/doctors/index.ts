import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Doctorhandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await clientPromise;
  const db = client.db('Doctor_db');

  if (req.method === 'GET') {
    try {
      const doctors = await db
        .collection('doctors') // collection name
        .find({})
        .toArray();
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving Doctor data' });
    }
  } else if (req.method === 'POST') {
    try {
      const {
        doctorName,
        email,
        mobile,
        department,
        gender,
        yearsOfExperience,
        registrationNumber,
        medicalCouncil,
        qualification,
        username,
        bio,
        image,
        password,
      } = req.body;

      // Perform any necessary validation or data manipulation before inserting into the database

      const doctor = {
        doctorName,
        email,
        mobile,
        department,
        gender,
        yearsOfExperience,
        registrationNumber,
        medicalCouncil,
        qualification,
        username,
        bio,
        image,
        password,
      };

      const result = await db.collection('doctors').insertOne(doctor);
      const insertedId = result.insertedId;

      const insertedDoctor = await db
        .collection('doctors')
        .findOne({ _id: insertedId });
      res.status(201).json(insertedDoctor);
    } catch (error) {
      res.status(500).json({ message: 'Error creating Doctor' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

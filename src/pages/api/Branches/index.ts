import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Loationthandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await clientPromise;
  const db = client.db('Appointment_db');

  if (req.method === 'GET') {
    try {
      const branches = await db
        .collection('Branch_db') // collection name
        .find({})
        .toArray();
      res.status(200).json(branches);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving Branches' });
    }
  } else if (req.method === 'POST') {
    try {
      const { id, Name, Address } = req.body;

      // Perform any necessary validation or data manipulation before inserting into the database

      const branch = {
        id,
        Name,
        Address,
      };

      const result = await db.collection('Branch_db').insertOne(branch);
      const insertedId = result.insertedId;

      const insertedBranch = await db
        .collection('Branch_db')
        .findOne({ _id: insertedId });
      res.status(201).json(insertedBranch);
    } catch (error) {
      res.status(500).json({ message: 'Error creating branch' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

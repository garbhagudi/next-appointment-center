import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Departmenhandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await clientPromise;
  const db = client.db('Appointment_db');

  if (req.method === 'GET') {
    try {
      const departments = await db
        .collection('Department_db') // Collection Name
        .find({})
        .toArray();
      res.status(200).json(departments);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving department' });
    }
  } else if (req.method === 'POST') {
    try {
      const { id, Name } = req.body;

      // Perform any necessary validation or data manipulation before inserting into the database

      const department = {
        id,
        Name,
      };

      const result = await db.collection('Department_db').insertOne(department);
      const insertedId = result.insertedId;

      const insertedDepartment = await db
        .collection('Department_db')
        .findOne({ _id: insertedId });
      res.status(201).json(insertedDepartment);
    } catch (error) {
      res.status(500).json({ message: 'Error creating department' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

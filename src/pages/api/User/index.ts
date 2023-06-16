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
      const users = await db
        .collection('User_db') // collection name
        .find({})
        .toArray();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users' });
    }
  } else if (req.method === 'POST') {
    try {
      const { id, Name, Mobile_Number, Type, Email, Location } = req.body;

      // Perform any necessary validation or data manipulation before inserting into the database

      const user = {
        id,
        Name,
        Mobile_Number,
        Type,
        Email,
        Location,
      };

      const result = await db.collection('User_db').insertOne(user);
      const insertedId = result.insertedId;

      const insertedUser = await db
        .collection('User_db')
        .findOne({ _id: insertedId });
      res.status(201).json(insertedUser);
    } catch (error) {
      res.status(500).json({ message: 'Error creating user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

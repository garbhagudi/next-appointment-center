import clientPromise from '@/lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Leadhandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = await clientPromise;
  const db = client.db('Appointment_db');

  if (req.method === 'GET') {
    try {
      const leads = await db
        .collection('Lead_db') // collection name
        .find({})
        .toArray();
      res.status(200).json(leads);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving Leads' });
    }
  } else if (req.method === 'POST') {
    try {
      const { id, Type, Name } = req.body;

      // Perform any necessary validation or data manipulation before inserting into the database

      const lead = {
        id,
        Type,
        Name,
      };

      const result = await db.collection('Lead_db').insertOne(lead);
      const insertedId = result.insertedId;

      const insertedLead = await db
        .collection('Lead_db')
        .findOne({ _id: insertedId });
      res.status(201).json(insertedLead);
    } catch (error) {
      res.status(500).json({ message: 'Error creating Lead' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Appointmenthandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = await client.db();

  if (req.method === "GET") {
    try {
      const appointments = await db
        .collection("GG-Appointment.Appointment_DB")
        .find({})
        .toArray();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving appointments" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }

  if (req.method === "POST") {
    try {
      const {
        Doctor_Name,
        Start_Time,
        End_Time,
        Consultation_Type,
        Patient_Name,
      } = req.body;

      // Perform any necessary validation or data manipulation before inserting into the database

      const appointment = {
        Doctor_Name,
        Start_Time,
        End_Time,
        Consultation_Type,
        Patient_Name,
      };

      const result = await db.collection("appointments").insertOne(appointment);
      const insertedId = result.insertedId;

      const insertedAppointment = await db
        .collection("GG-Appointment.Appointment_DB")
        .findOne({ _id: insertedId });
      res.status(201).json(insertedAppointment);
    } catch (error) {
      res.status(500).json({ message: "Error creating appointment" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

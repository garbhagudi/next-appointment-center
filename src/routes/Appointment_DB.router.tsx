// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { Appointment_DB_C } from "../services/database.service";
import Appointment_DB from "../models/Appointment_db";

// Global Config
export const Appointment_DB_router = express.Router();
Appointment_DB_router.use(express.json());

// GET
Appointment_DB_router.get("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const query = { _id: new ObjectId(id) };
    const appointment = (await Appointment_DB_C.Appointment_DB.findOne(
      query
    )) as Appointment_DB;

    if (appointment) {
      res.status(200).send(appointment);
    }
  } catch (error) {
    res
      .status(404)
      .send(`Unable to find matching document with id: ${req.params.id}`);
  }
});

// // POST
// Appointment_DB_router.post("/", async (req: Request, res: Response) => {
//   try {
//     const newAppointment = req.body as appointment;
//     const result = await Appointment_DB_C.Appointment_DB.insertOne(
//       newAppointment
//     );

//     result
//       ? res
//           .status(201)
//           .send(`Successfully created a new game with id ${result.insertedId}`)
//       : res.status(500).send("Failed to create a new game.");
//   } catch (error) {
//     console.error(error);
//     res.status(400).send(error);
//   }
// });

// // PUT
// Appointment_DB_router.put("/:id", async (req: Request, res: Response) => {
//   const id = req?.params?.id;

//   try {
//     const updatedAppointment: appointment = req.body as appointment;
//     const query = { _id: new ObjectId(id) };

//     const result = await Appointment_DB_C.Appointment_DB.updateOne(query, {
//       $set: updatedAppointment,
//     });

//     result
//       ? res.status(200).send(`Successfully updated game with id ${id}`)
//       : res.status(304).send(`Game with id: ${id} not updated`);
//   } catch (error) {
//     console.error(error);
//     res.status(400).send(error);
//   }
// });

// // DELETE

// Appointment_DB_router.delete("/:id", async (req: Request, res: Response) => {
//   const id = req?.params?.id;

//   try {
//     const query = { _id: new ObjectId(id) };
//     const result = await Appointment_DB_C.Appointment_DB.deleteOne(query);

//     if (result && result.deletedCount) {
//       res.status(202).send(`Successfully removed game with id ${id}`);
//     } else if (!result) {
//       res.status(400).send(`Failed to remove game with id ${id}`);
//     } else if (!result.deletedCount) {
//       res.status(404).send(`Game with id ${id} does not exist`);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(400).send(error);
//   }
// });

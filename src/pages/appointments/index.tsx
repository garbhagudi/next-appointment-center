import { useEffect, useState } from "react";

interface Appointment {
  _id: string;
  Doctor_Name: string;
  Start_Time: string;
  End_Time: string;
  Consultation_Type: string;
  Patient_Name: string;
}

const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/appointments", { method: "GET" });
      const data = await response.json();
      console.log(data);

      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <div>
      <h2 className="font-bold pb-6">Appointments</h2>
      {appointments.length > 0 ? (
        <ul className="space-y-3">
          {appointments.map((appointment) => (
            <li key={appointment._id}>
              <p>Doctor Name: {appointment.Doctor_Name}</p>
              <p>Start Time: {appointment.Start_Time}</p>
              <p>End Time: {appointment.End_Time}</p>
              <p>Consultation Type: {appointment.Consultation_Type}</p>
              <p>Patient Name: {appointment.Patient_Name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
};

export default AppointmentList;

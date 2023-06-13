import React, { useState } from "react";

const AppointmentForm = () => {
  const [doctorName, setDoctorName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [consultationType, setConsultationType] = useState("");
  const [patientName, setPatientName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      Doctor_Name: doctorName,
      Start_Time: startTime,
      End_Time: endTime,
      Consultation_Type: consultationType,
      Patient_Name: patientName,
    };

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Appointment created successfully");
      } else {
        // Handle failed submission, e.g., show error message
      }
    } catch (error) {
      alert("An unexpected error occurred");
    }
  };

  return (
    <div>
      <h1>Create Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="doctorName">Doctor Name</label>
          <input
            type="text"
            id="doctorName"
            className="border border-gray-200"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="startTime">Start Time</label>
          <input
            type="text"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endTime">End Time</label>
          <input
            type="text"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="consultationType">Consultation Type</label>
          <input
            type="text"
            id="consultationType"
            value={consultationType}
            onChange={(e) => setConsultationType(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="patientName">Patient Name</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;

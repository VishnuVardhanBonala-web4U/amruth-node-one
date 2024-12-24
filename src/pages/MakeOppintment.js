import React, { useState } from "react";
import axios from "axios";

const MakeAppointment = () => {
  const [patientName, setPatientName] = useState(""); // changed from patientId to patientName
  const [doctorName, setDoctorName] = useState(""); // changed from doctorId to doctorName
  const [appointmentTime, setAppointmentTime] = useState("");
  const [message, setMessage] = useState("");

  console.log("Sending data to backend:", {
    patientName,
    doctorName,
    appointmentTime,
  });   
 const handleMakeAppointment = async () => {
   try {
     console.log("Sending API request with:", {
       patientName,
       doctorName,
       appointmentTime,
     });

     const response = await axios.post(
       "http://localhost:4000/api/appointments/make-appointment",
       { patientName, doctorName, appointmentTime },
       {
         headers: {
           "Content-Type": "application/json",
         },
       }
     );

     console.log("API Response:", response.data);
     setMessage(
       `Appointment successfully made for ${response.data.appointment.patientName} with Dr. ${response.data.appointment.doctorName} at ${response.data.appointment.appointmentTime}`
     );
   } catch (error) {
     console.error("API Error:", error);
     setMessage(error.response?.data?.error || "Error making appointment");
   }
 };


  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Make Appointment</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Patient Name
          </label>
          <input
            type="text"
            value={patientName} // updated to patientName
            onChange={(e) => setPatientName(e?.target?.value)} // updated to setPatientName
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Doctor Name
          </label>
          <input
            type="text"
            value={doctorName} // updated to doctorName
            onChange={(e) => setDoctorName(e?.target?.value)} // updated to setDoctorName
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Appointment Time
          </label>
          <input
            type="datetime-local"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e?.target?.value)}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={() => {
            console.log("Button clicked");
            handleMakeAppointment();
          }}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 "
        >
          Make Appointment
        </button>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default MakeAppointment;

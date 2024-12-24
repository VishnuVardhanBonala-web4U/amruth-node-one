import React, { useState } from "react";
import axios from "axios";

const MissedAppointments = () => {
  const [patientId, setPatientId] = useState("");
  const [message, setMessage] = useState("");
  const [missedAppointments, setMissedAppointments] = useState([]);

  const handleDetectMissedAppointment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/appointments/detect-missed",
        {
          patientId,
        }
      );
      console.log("Response:", response);

      // If missed appointments are found, set them to state
      if (response.data.updatedCount > 0) {
        setMissedAppointments(response.data.missedAppointments); // Assuming missed appointments are returned in the response
        setMessage("Missed appointments detected successfully.");
      } else {
        setMissedAppointments([]); // Clear the list if no missed appointments
        setMessage("No missed appointments.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMissedAppointments([]); // Clear the list on error
      setMessage("Error detecting missed appointments.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Detect Missed Appointment</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Patient ID
          </label>
          <input
            type="text"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleDetectMissedAppointment}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Detect Missed Appointment
        </button>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-500">{message}</p>
        )}

        {/* Display missed appointments in a table if available */}
        {missedAppointments && missedAppointments.length > 0 ? (
          <table className="mt-6 min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Patient ID</th>
                <th className="border px-4 py-2">Appointment Time</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {missedAppointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td className="border px-4 py-2">{appointment.patientId}</td>
                  <td className="border px-4 py-2">
                    {new Date(appointment.timeSlot).toLocaleString()}
                  </td>
                  <td className="border px-4 py-2">{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="mt-4 text-center text-sm text-gray-500">
            No missed appointments.
          </p>
        )}
      </div>
    </div>
  );
};

export default MissedAppointments;

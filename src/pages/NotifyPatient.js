import React, { useState } from "react";
import axios from "axios";

const NotifyPatient = () => {
  const [patientId, setPatientId] = useState("");
  const [message, setMessage] = useState("");
  const [notificationSent, setNotificationSent] = useState(false);

  const handleNotifyPatient = async () => {
    try {
      const response = await axios.post(
        "localhost:4000/api/appointments/notify-patient",
        {
          patientId,
        }
        );
        
        console.log("response", response);  
      setMessage("Notification sent successfully.");
      setNotificationSent(true);
    } catch (error) {
        console.log("error", error);
      setMessage("Error sending notification.");
      setNotificationSent(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Notify Patient About Rescheduling
      </h2>
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
          onClick={handleNotifyPatient}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
        >
          Send Notification
        </button>
        {message && (
          <p className="mt-4 text-center text-sm text-gray-500">{message}</p>
        )}
        {notificationSent && (
          <p className="mt-4 text-center text-sm text-green-500">
            Patient has been notified!
          </p>
        )}
      </div>
    </div>
  );
};

export default NotifyPatient;

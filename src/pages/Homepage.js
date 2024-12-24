import React, { useState } from "react";
import MissedAppointments from "./MissedAppointments";
import AvailableSlots from "./AvailableSlots";
import NotifyPatient from "./NotifyPatient";
import MakeAppointment from "./MakeOppintment";

const HomePage = () => {
  const [doctorId, setDoctorId] = useState("");

  return (
    <div>
      {/* Header Section */}
      <MakeAppointment />
     
      {/* Main Content Section */}
      <div className="container mx-auto p-6 space-y-8">
        {/* Missed Appointments Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Missed Appointments</h2>
          <MissedAppointments />
         
        </div>

        {/* Available Slots Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Available Slots</h2>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Doctor ID
          </label>
          <input
            type="text"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="Doctor ID"
          />
          {doctorId && <AvailableSlots doctorId={doctorId} />}
        </div>

        {/* Notify Patient Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Notify Patient</h2>
          <NotifyPatient />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

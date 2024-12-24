import React, { useState, useEffect } from "react";
import axios from "axios";

const AvailableSlots = ({ doctorId }) => {
  const [slots, setSlots] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      try {
        const response = await axios.get(
          `localhost:4000/api/appointments/slots/${doctorId}`
        );
        setSlots(response.data);
      } catch (error) {
        setMessage("Error fetching available slots.");
      }
    };

    fetchAvailableSlots();
  }, [doctorId]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Available Reschedule Slots
      </h2>
      {message && (
        <p className="text-center text-sm text-gray-500">{message}</p>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {slots.length ? (
          slots.map((slot, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-200 transition"
            >
              <p className="text-lg font-medium">
                {new Date(slot).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No available slots
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableSlots;

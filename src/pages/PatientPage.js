import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form/Form";
import Message from "../components/Message/Message";

const PatientPage = () => {
  const [patientForm, setPatientForm] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isCreateMode, setIsCreateMode] = useState(true); // Toggle between Create and Login

  // Inputs for the Create Patient form
  const createPatientInputs = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
    { name: "dateOfBirth", type: "date", placeholder: "Date of Birth" },
  ];

  // Inputs for the Login Patient form
  const loginPatientInputs = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  // Handle patient creation
  const handleCreatePatient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/patients/create",
        patientForm
      );
      setMessage(response.data.message);
    } catch (err) {
      setMessage("Error creating patient: " + err.message);
    }
  };

  // Handle patient login
  const handleLoginPatient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/patients/login",
        loginForm
      );
      setMessage(response.data.message);
    } catch (err) {
      setMessage("Error logging in: " + err.message);
    }
  };

  return (
    <div className="patient-page container mx-auto p-6 bg-white rounded-lg">
      <div className="flex justify-center mb-4 space-x-3">
        <button
          onClick={() => setIsCreateMode(true)}
          className={`px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300 ${
            isCreateMode ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Create Patient
        </button>
        <button
          onClick={() => setIsCreateMode(false)}
          className={`px-6 py-2 rounded-md text-lg font-semibold transition-all duration-300 ${
            !isCreateMode ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Login Patient
        </button>
      </div>

      <div className="form-container mt-6">
        {isCreateMode ? (
          <>
            <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">
              Create Patient
            </h2>
            <Form
              formData={patientForm}
              setFormData={setPatientForm}
              onSubmit={handleCreatePatient}
              inputs={createPatientInputs}
            />
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">
              Login Patient
            </h2>
            <Form
              formData={loginForm}
              setFormData={setLoginForm}
              onSubmit={handleLoginPatient}
              inputs={loginPatientInputs}
            />
          </>
        )}
      </div>

      {message && <Message message={message} />}
    </div>
  );
};

export default PatientPage;

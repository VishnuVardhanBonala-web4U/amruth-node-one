import React, { useState } from "react";
import axios from "axios";
import Form from "../components/Form/Form";
import Message from "../components/Message/Message";

const DoctorPage = () => {
  const [doctorForm, setDoctorForm] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isCreateMode, setIsCreateMode] = useState(true); // State to toggle between forms

  // Inputs for the Create Doctor form
  const createDoctorInputs = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
    { name: "specialization", type: "text", placeholder: "Specialization" },
  ];

  // Inputs for the Login Doctor form
  const loginDoctorInputs = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
  ];

  // Handle doctor creation
  const handleCreateDoctor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/doctors/create",
        doctorForm
      );
      setMessage(response.data.message);
    } catch (err) {
      setMessage("Error creating doctor: " + err.message);
    }
  };

  // Handle doctor login
  const handleLoginDoctor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/doctors/login",
        loginForm
      );
      setMessage(response.data.message);
    } catch (err) {
      setMessage("Error logging in: " + err.message);
    }
  };

  return (
    <div className="doctor-page container mx-auto p-6">
      <div className="flex justify-center space-x-4 m-4 ">
        <button
          onClick={() => setIsCreateMode(true)}
          className={`px-6 py-2 rounded-md ${
            isCreateMode ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
         Create Doctor
        </button>
        <button
          onClick={() => setIsCreateMode(false)}
          className={`px-6 py-2 rounded-md ${
            !isCreateMode ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Login Doctor
        </button>
      </div>

      {isCreateMode ? (
        <>
          <h2 className="text-3xl font-semibold mb-4 text-center m-2">Create Doctor</h2>
          <Form
            formData={doctorForm}
            setFormData={setDoctorForm}
            onSubmit={handleCreateDoctor}
            inputs={createDoctorInputs}
          />
        </>
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-4 text-center m-2 ">Login Doctor</h2>
          <Form
            formData={loginForm}
            setFormData={setLoginForm}
            onSubmit={handleLoginDoctor}
            inputs={loginDoctorInputs}
          />
        </>
      )}

      {message && <Message message={message} />}
    </div>
  );
};

export default DoctorPage;

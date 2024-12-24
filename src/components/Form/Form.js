import React from "react";
import Input from "../Input/Input";

const Form = ({ formData, setFormData, onSubmit, inputs }) => {


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      {inputs?.map((input) => (
        <div key={input?.name} className="mb-4">
          <Input
            type={input?.type}
            placeholder={input?.placeholder}
            value={formData[input?.name]}
            onChange={handleChange}
            name={input?.name}
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

import React from "react";

const Input = ({ type, placeholder, value, onChange, name, id, required }) => {
  return (
    <input
      type={type} // Ensure the input type is passed correctly
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      required={required} // Add 'required' if needed
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Input;

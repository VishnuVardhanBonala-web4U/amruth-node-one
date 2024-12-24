import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Appointment Rescheduler</h1>

        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-200  text-lg font-semibold">
            Home
          </Link>
          <Link to="/doctor" className="hover:text-gray-200  text-lg font-semibold">
            Doctor
          </Link>
          <Link to="/patient" className="hover:text-gray-200 t text-lg font-semibold">
            Patient
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

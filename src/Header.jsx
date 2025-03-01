import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <div className="d-flex justify-content-between">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/api">API</Link>
          <Link to="/form">FormValidation</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

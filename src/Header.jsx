import React, { createContext, useContext, useState } from 'react';
import { Link } from "react-router-dom";
import MessageContext from './MessageContext';
const Header = () => {
  const { setMessage } = useContext(MessageContext);
  return (
    <header className="bg-blue-600 text-white">
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <div className="d-flex justify-content-between">
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/api">API</Link>
          <Link to="/form">FormValidation</Link>
          <Link to="/context">Context</Link>
          <Link to="/reducerhook">ReducerHook</Link>
          <Link to="/callbackhook">CallbackHook</Link>
          <Link to="/memohook">MemoHook</Link>
        </div>
        <button onClick={() => setMessage("Updated by Sibling B!")}>
        Update Message
      </button>
      </nav>
    </header>
  );
};

export default Header;

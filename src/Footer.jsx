import React, { createContext, useContext, useState } from 'react';
import MessageContext from './MessageContext';
const Footer = () => {
  const { message } = useContext(MessageContext);
  return (
    <footer className="bg-gray-800 text-center p-4 mt-4">
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      <p>Message: {message}</p>
    </footer>
  );
};

export default Footer;

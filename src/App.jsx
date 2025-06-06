import { Routes, Route, Navigate  } from "react-router-dom";
import Home from "./component/Home";
import UserDetail from "./component/UserDetail";
import About from "./component/About"
import ApiCallUsingService from "./component/ApiCallUsingService";
import FormValidation from "./component/FormValidation"
import Context from './component/Context'
import Header from "./Header";
import Footer from "./Footer";
import ReducerHook from "./component/ReducerHook"
import CallbackHook from "./component/CallbackHook"
import MemoHook from "./component/MemoHook"
import './App.css'
import MessageContext from './MessageContext';
import React, { createContext, useContext, useState } from 'react';
/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/
// const MessageContext = createContext();
const App = () => {
  const [message, setMessage] = useState("Hello from Context!");
  const isAuthenticated = localStorage.getItem("auth") !== null;
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
    <Header />
    <div className="p-4">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/api" element={<ApiCallUsingService/>}/>
        {/* {isAuthenticated && <Route path="/form" element={<FormValidation/>}/>} */}

        <Route
            path="/form"
            element={isAuthenticated ? <FormValidation /> : <Navigate to="/api" />}
          />
        <Route path="context" element={<Context/>}/>
        <Route path="reducerhook" element={<ReducerHook/>}/>
        <Route path="callbackhook" element={<CallbackHook/>}/>
        <Route path="memohook" element={<MemoHook/>}/>
        <Route path="*" element={<About/>}/>
      </Routes>
      
    </div>
    <Footer/>
    </MessageContext.Provider>
  );
};

export default App

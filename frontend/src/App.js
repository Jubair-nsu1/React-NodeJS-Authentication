import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';

//Components
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

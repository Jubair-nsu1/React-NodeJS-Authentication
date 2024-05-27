import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Pages
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

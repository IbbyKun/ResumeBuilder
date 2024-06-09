import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/LoginSignUp/login';
import SignUp from './Pages/LoginSignUp/signup';
import Home from './App';

function Routing() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default Routing;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// import Navbar from './components/Navbar';
import LandingPage from '../src/Views/LandingPage'
import BuilderAndParser from '../src/Views/BuilderAndParser';
import Parser from '../src/Views/Parser';
import Builder from '../src/Views/Builder';
import ThankYou from '../src/Views/ThankYou';
import BrowseResume from '../src/Views/BrowseResume';
import Signin from '../src/Views/Signin';
import ResumeTemplate from '../src/Views/ResumeTemplate';
import ResumeForm from '../src/Views/ResumeForm';
import SignUp from '../src/Views/SignUp';
function App() {
  return (
    <Router>
      <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/BuilderAndParser" element={<BuilderAndParser />} />
                <Route path="/Builder" element={<Builder />} />
                <Route path="/Parser" element={<Parser />} />
                <Route path="/ThankYou" element={<ThankYou />} />
                <Route path="/BrowseResume" element={<BrowseResume />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/ResumeTemplate" element={<ResumeTemplate />} />
                <Route path="/ResumeForm" element={<ResumeForm />} />
              </Routes>
    </Router>
  );
}

export default App;

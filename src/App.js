import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from 'react-router-dom';
import Template from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';
import Extraction from './Pages/Model/Category/category';
import Login from './Views/Signin';
import Signup from './Views/SignUp';
import Steps from './Pages/Steps/steps';
import Testemonials from './Pages/Testemonials/testemonials';
import Footer from './Components/Footer/Footer';
import Evaluation from './Pages/Model/NewRanking';
import Parser from './Pages/Parser/resumeparser';
import Main from './Views/LandingPage';
import Home from './MainPage'
import Page2 from './Views/BuilderAndParser';

function App() {
  return (
    <ResumeState>
      <div className="App">
        <Helmet>
          <title>Resume Builder - Create Professional Resumes Online</title>
          <meta
            name="description"
            content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily."
          />
          <meta
            name="keywords"
            content="resume builder, professional resumes, online resumes, resume templates"
          />
          <meta name="author" content="Hardik Desai" />
          <meta
            property="og:title"
            content="Resume Builder - Create Professional Resumes Online"
          />
          <meta
            property="og:description"
            content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily."
          />
          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/87645745?v=4"
          />
          <meta property="og:url" content="https://quick-resume.netlify.app/" />
          <meta property="og:type" content="website" />
        </Helmet>

        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/page2" element={<Page2 />} />
          <Route
            exact
            path="/home"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/"
            element={
              <>
                <Main />
              </>
            }
          />
          <Route
            exact
            path="/parser"
            element={
              <>
                <Navbar />
                <Parser />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <>
                <Navbar />
                <Extraction />
              </>
            }
          />
          <Route
            exact
            path="/template"
            element={
              <>
                <Navbar />
                <Template />
              </>
            }
          />
          <Route
            exact
            path="/evaluation"
            element={
              <>
                <Navbar />
                <Evaluation />
              </>
            }
          />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;

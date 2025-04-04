// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/Home';

import Footer from './components/Footer';
import TechnologiesPage from './components/TechnologyPages';
import TrueZigZagLayout from './components/DomainVertical';
import TeamPage from './components/Teams';
import Services from './components/OurServices';
import ContactForm from './components/ContactUs';
import { createGlobalStyle } from "styled-components";
// import TrueZigZagLayout from './components/DomainVertical';
const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #0e0e0e;
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, #ff3333, #cc0000);
    border-radius: 0px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(90deg, #cc0000, #ff3333);
  }
`;
function App() {
  return (
    
    <Router>
      <GlobalStyles/>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/domainvertical" element={<TrueZigZagLayout />} />
        <Route path="/ourteam" element={<TeamPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>


  );
}

export default App;

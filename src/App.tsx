import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/Home';

import Footer from './components/Footer';
import TechnologiesPage from './components/TechnologyPages';
import TrueZigZagLayout from './components/DomainVertical';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technologies" element={<TechnologiesPage />} />
        <Route path="/domainvertical" element={<TrueZigZagLayout />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

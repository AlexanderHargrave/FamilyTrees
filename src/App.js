import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import ViewTrees from './ViewTrees';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ViewTrees" element={<ViewTrees />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Stores from './pages/Stores';
import Men from './pages/categories/Men';
import Kids from './pages/categories/Kids';
import Women from './pages/categories/Women';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/categories/Men" element={<Men />} />
          <Route path="/categories/Women" element={<Women />} />
          <Route path="/categories/Kids" element={<Kids />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
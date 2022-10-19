import React from 'react';
import { Route, Routes } from 'react-router-dom';
// components
import Footer from './components/Footer';
import Header from './components/Header';
// pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Blogs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

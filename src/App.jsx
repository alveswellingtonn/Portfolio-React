import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Banner /> } />
        <Route path='/portfolio' element={ <Portfolio /> } />
      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;

import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projeto from './pages/Projeto';
import Contato from './pages/Contato';


function App() {
  return (

    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/portfolio' element={ <Projeto /> } />
        <Route path='/contato' element={ <Contato /> } />
      </Routes>

      <Footer />

    </BrowserRouter>

  );
}

export default App;

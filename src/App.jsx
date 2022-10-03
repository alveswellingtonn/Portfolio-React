import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <Footer />
    </React.Fragment>
  );
}

export default App;

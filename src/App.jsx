import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
    </React.Fragment>
  );
}

export default App;

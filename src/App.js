import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  const [show, setShow] = useState(true);

  let dealExpirationDate = new Date("12/20/2020"); 
  let today = new Date();
  let daysUntilDealEnds = Math.floor((dealExpirationDate.getTime() - today.getTime()) / (1000*60*60*24));

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

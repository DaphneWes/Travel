import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/Travel' exact element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/sign-up' element={<SignUp />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

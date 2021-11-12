import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Routes, Switch, Route } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Switch>
        <Router path='/' exact />
      </Switch>
      
    </Router>
  );
}

export default App;

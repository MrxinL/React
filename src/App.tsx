import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Router} from './router/index';
// import routes from './router/index'
import Login from './pages/login/index'
import Layout from './pages/main/index'
function App() {
  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;

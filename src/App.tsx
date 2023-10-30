import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/index'
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

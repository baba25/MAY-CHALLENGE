import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

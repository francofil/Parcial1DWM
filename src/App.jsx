import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/detalles';
import './App.css';

export default function App() {

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}
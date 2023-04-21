import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Cart from './Cart.js';
import Navbar from './Navbar.js';
import './style.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

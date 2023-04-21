import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <ul>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

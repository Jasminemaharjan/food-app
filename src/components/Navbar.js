import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='packet'>
    <nav className="navbar navbar-light bg-light navbar">
      <div className="container-fluid d-flex align-items-center">

        <Link className="navbar-brand me-4 name fs-1 fst-italic" to="/">
          <div>Pick &</div>
          <div>Dine</div>
        </Link>
        <Link className="nav-link" to="/">Search</Link>

        <div className="d-flex">
          <Link className="nav-link me-3" to="/favourites">Favourites</Link>
          <Link className="nav-link me-3" to="/cart">Add to Cart</Link>
          <Link className="nav-link" to="/login">Login</Link>
        </div>
      </div>
    </nav>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="packet">
      <nav className="navbar">
        <div className="container-fluid d-flex align-items-center">

          <Link className="navbar-brand me-4 name fs-3 fst-italic" to="/">
            Pick & Dine
          </Link>

          <ul className="navbar-nav d-flex flex-row align-items-center mb-0">

            <li className="nav-item">
              <Link className="nav-link me-3" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link me-3" to="/favourites">
                Favourites
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link me-3" to="/cart">
                Add to Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link me-3" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
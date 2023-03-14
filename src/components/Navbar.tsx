import React from 'react';
import { Link } from 'react-router-dom';

function Navbar( ) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favourite" className="nav-link  text-dark">
                  Favourite
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link  text-dark">
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
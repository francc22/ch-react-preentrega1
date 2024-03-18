import React from "react";
import Cart from "../cart/Cart";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="" href="#">
            <img src="./img/logo.png" alt="logo empresa" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gamming
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Technologies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Brands
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pc assembly
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Outlet
                </a>
              </li>
            </ul>
          </div>
          <Cart />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

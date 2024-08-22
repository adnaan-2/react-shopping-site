import React from "react";
import { Link } from "react-router-dom"; // Use Link for React Router if applicable

function Header() {
  return (
    <div className="header">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand font" href="/">
            RingStore
          </a>
          <div className="list">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/stores">
                  Stores
                </Link>
              </li>
              <li className="nav-item dropdown dropdown-center">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/categories/men">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categories/women">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categories/kids">
                      kids
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;

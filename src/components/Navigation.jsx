import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brannd" to="/">
              React Multi-Page Website
            </NavLink>
            <div>
              <ul className="navbar-nav m1-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ekranglowny">
                    Ekran główny
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item>">
                  <NavLink className="nav-link" to="/rozpocznij_serie_pomiarowa">
                    Rozpocznij seria pomiarowa
                  </NavLink>
                </li>
                <li className="nav-item>">
                  <NavLink className="nav-link" to="/pusta_strona">
                    Przegladanie serii pomiarowej
                  </NavLink>
                </li> 
                <li className="nav-item>">
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> 
    )
}

export default Navigation;
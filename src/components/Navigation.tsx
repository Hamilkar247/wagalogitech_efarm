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
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ekranglowny">
                    Ekran główny
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">
                    Blog
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/okno_serii_pomiarow">
                    Okno serii pomiarów
                  </NavLink>
                </li>  */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/rozpocznij_serie_pomiarowa">
                    Rozpocznij serie pomiarowa
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/trwanie_serii_pomiarowej">
                    Trwanie serii pomiarowej
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/okno_pomiaru">
                    Okno pomiaru
                  </NavLink>
                </li> 
                <li className="nav-item>">
                  <NavLink className="nav-link" to="/lista_uzytkownikow">
                    Lista użytkowników
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/okno_sesji_uzytkownika">
                    Okno sesji użytkownika
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/przykladowy_arkusz_danych">
                    Przykładowy arkusz danych
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> 
    )
}

export default Navigation;
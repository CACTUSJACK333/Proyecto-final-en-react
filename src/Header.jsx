import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header-menu">
        <nav className="Menu">
          <ul>
            <li><a href="#seccion1">¿Quién es?</a></li>
            <li><a href="#seccion2">¿Qué hace?</a></li>
            <li><a href="#seccion3">Album</a></li>
            <li><a href="#seccion4">Visítalo</a></li>
          </ul>
        </nav>
      </div>
      <div className="Header-titulo">
        <h1>PLAYBOI CARTI</h1>
      </div>
    </header>
  );
}

export default Header;
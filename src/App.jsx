import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <section id="seccion1" className="Seccion Seccion-seccion1">
            <h2>¿Quién es carti?</h2>
            <p>Es un cantante que viene de atlanta con un sonido siempre revolucionario</p>
          </section>
          <section id="seccion2" className="Seccion Seccion-seccion2">
            <h2>¿Qué hace?</h2>
            <p>Es un gran exponente en la moda juvenil y se supone que hace musica pero tiene a todos esperando su album</p>
          </section>
          <section id="seccion3" className="Seccion Seccion-seccion3">
            <h2>Album</h2>
            <p>Está previsto a salir el 27 de Diciembre pero carti no ha dicho nada</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              alert('NO SALDRÁ NUNCA');
            }}>
              <label htmlFor="mensaje">¿Cuando crees que salga el album?:</label>
              <input
                type="text"
                id="mensaje"
                placeholder="..."
              />
              <button type="submit">Enviar</button>
            </form>
          </section>
          <section id="seccion4" className="Seccion Seccion-seccion4">
            <h2>Visítalo</h2>
            <div className="carti-contenido">
              <img 
                src="https://i.scdn.co/image/ab6761610000e5ebba50ca67ffc3097f6ea1710a" 
                alt="Imagen de música" 
                className="carti-imagen"
              />
              <div className="carti-texto">
                <p>Visita su canal en youtube:</p>
                <a href="https://www.youtube.com/@playboicarti" target="_blank" rel="noopener noreferrer">
                  Playboi Carti en YouTube
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
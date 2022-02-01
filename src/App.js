import logo from './logo.png';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Hola Dojo ya se React!</h1>
      </header>

      <body className = "App-body">
        <h2>Cosas que necesito hacer</h2>

        <lu>
            <li>Mejorar mi lenguaje JavaScrip y React</li>
            <li>Escalar el Chimborazo</li>
            <li>Aprendera manejar moto</li>
            <li>Comer y no engordar</li>
            <li>Hacer mi portafolio </li>
        </lu>  

      </body>   
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Producto from '../src/components/ComponenteClase';
import Contador from '../src/components/Hooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador />
      </header>
    </div>
  );
}

export default App;

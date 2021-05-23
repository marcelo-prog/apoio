import React from 'react';
import './App.css';
import Components from './Components/Components'
import Centro from './Components/Centro'

export default () =>{
  return (
    <header className="Inicio">
      <div>
        <h1>APOIO AVANÇADO</h1>
        <Components/>
        <Centro/>
      </div>
    </header>  
  );

} 
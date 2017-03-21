import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button-App.js';

class App extends Component {
	
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bem-Vindo ao React</h2>
        </div>
        <p className="App-intro">
         <h1>Primeiro projeto React</h1>
		 <Button texto='MEU TEXTO' />
        </p>
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button-App.js';

class App extends React.Component {
	
  render() {
    let txt = this.props.txt

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bem-Vindo ao React</h2>
        </div>
        <p className="App-intro">
         <h1>Primeiro Projeto React</h1>
		 <Button texto='MEU TEXTO' />
        </p>
      </div>
    );
  }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}


export default App;

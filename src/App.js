import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button-App.js';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      txt: 'Esse é o texto "state"',
      cat: 0
    }
  }

  update( e ){
    this.setState({txt: e.target.value})
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bem-Vindo ao React</h2>
        </div>
        <div className="App-intro">
          <input type="text" onChange={this.update.bind(this)}></input>
          <h1>{this.state.txt} - {this.state.cat}</h1>
          <Button texto='MEU TEXTO'></Button>
        </div>
      </div>
    );
  }
}


export default App;

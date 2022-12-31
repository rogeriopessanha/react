
import React, { Component } from 'react';

class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      nome: "Rogerio",
      contador: 0
    }
  }

  aumentar(){
    console.log('Aumentou')
  }

  render() {
    return (
      <div>

        <h1>Contador</h1>

        <h3>
          <button>-</button> 
          {this.state.contador} 
          <button onclick={this.aumentar}>+</button>
        </h3>

      </div>
    );
  }
}

export default App;

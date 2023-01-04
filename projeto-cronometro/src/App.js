import React, {Component} from 'react'
import './style.css'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {

    }

  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/cronometro.png')} alt="" />
        <a className="timer">0.0</a>

        <div className="areaBtn">
          <a className="botao">VAI</a>
          <a className="botao">LIMPAR</a>
        </div>
      </div>
    )
  }
}

export default App;

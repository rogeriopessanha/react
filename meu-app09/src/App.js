import React, {Component} from 'react'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      nome: '',
      email: '',
      senha: ''
    }

  }

  render(){
    return(
      <div>
        <h1>Novo usuario</h1>

        <form>
          <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} />
          <br/>

          <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
          <br/>

          <input type="password" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} />
        </form>
      </div>
    )
  }
}

export default App;
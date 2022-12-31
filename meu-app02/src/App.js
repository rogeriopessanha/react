import React, {Component} from 'react';

class Equipe extends Component{
  render(){
    return(
      <div>
      
        <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
        <hr/>
      </div>
    )
  }
}

class Sobre extends Component{
  render(){
    return(
      <div>
        <h2>Olá eu sou o(a){this.props.nome}</h2>
        <h3>Meu cargo: {this.props.cargo}</h3>
        <h3>Minha idade: {this.props.idade}</h3>
      </div>
    )
  }
}


function App(){
  return(
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Rogerio" cargo="Desenvolvedor" idade="35"/>
      <Equipe nome="João" cargo="Analista" idade="60"/>
      <Equipe nome="Maria" cargo="Tech Recruit" idade="42"/>
    </div>
  );
}

export default App;
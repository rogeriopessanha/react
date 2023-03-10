
import React from 'react';

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social fb={props.facebook}/>
      <hr/>
    </div>
  );
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá, eu sou o(a) {props.nome}</h2>
      <h3>Meu cargo é de: {props.cargo}</h3>
      <h3>Eu tenho: {props.idade}</h3>
    </div>
  )
}

const Social = (props) =>{
  return(
    <div>
      <a href={props.fb}>Facebook</a>
      <a>Twitter</a>
      <a>Linkedin</a>
    </div>
  )
}
 
function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Rogerio" cargo="Desenvolvedor" idade="35" facebook="https://google.com"/>
      <Equipe nome="Isabel" cargo="Analista" 
      idade="28" facebook="https://google.com"/>
      <Equipe nome="Gaia" cargo="Designer" 
      idade="16" facebook="https://google.com"/>
    </div>
  )
}

export default App;
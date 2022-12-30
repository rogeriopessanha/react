
import React from 'react';

const Bemvindo = (props) => {
  return(
    <div>
      <h2>Bem Vindo: {props.nome} </h2>
      <h3>Tenho {props.idade} Anos</h3>
    </div>
  )
}

function App() {
  return (
    <div>
      Olá Mundo!

      <Bemvindo nome="Rogerio" idade="35"/>
      <Bemvindo nome="Maria" idade="20"/>

    </div>
  )
}

export default App;
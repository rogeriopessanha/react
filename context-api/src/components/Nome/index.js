

// function Nome() {
//     return (
//       <div>
//        <span style={{color: '#ff0000'}} >Bem vindo</span> <br/> 

//       </div>
//     );
//   }
  
//   export default Nome;

import { useContext } from 'react';

import { UserContext } from '../../contexts/user'

function Nome() {
  const { alunos, setAlunos } = useContext(UserContext);

  return (
    <div>
      <span style={{ color: '#FF0000' }} >Bem vindo: {alunos} </span>
      <br/>
      <button onClick={ () => setAlunos('Lucas Silva') } >Troca Nome</button>
    </div>
  );
}

export default Nome;
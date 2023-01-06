
import { useState } from 'react';
import { db} from './firebaseConnection'
import { doc, setDoc} from 'firebase/firestore'
import './app.css'
// import { async } from '@firebase/util';

function App() {

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')

  async function handleAdd() {
    await setDoc(doc(db, "posts", 123456), {
      titulo: titulo,
      autor: autor,
    })
    .then(() =>{
      console.log("dados registrados no banco")
    })

    .catch((error) =>{
      console.log("deu erro" + error)
    })
  }

  return (
    <div>
      <h1>testando ;) </h1>

      <div className="container">
        <label>Titulo:</label> <br/>

        <textarea type="text" placeholder='Digite seu titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}/> <br/>

        <label>Autor:</label> <br/>

        <input type="text" placeholder='Autor do post' value={autor} onChange={(e) => setAutor(e.target.value)} /> <br/>

        <button onClick={handleAdd}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;

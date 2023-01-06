
import { useState } from 'react';
import { db} from './firebaseConnection'
import { doc, setDoc, collection, addDoc, getDoc} from 'firebase/firestore'
import './app.css'
// import { async } from '@firebase/util';
// import { async } from '@firebase/util';

function App() {

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')

  async function handleAdd() {
    // await setDoc(doc(db, "posts", "123456"), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    // .then(() =>{
    //   console.log("dados registrados no banco")
    // })

    // .catch((error) =>{
    //   console.log("deu erro" + error)
    // })

    await addDoc(collection(db, "posts"),{
      titulo: titulo,
      autor: autor,
    })
    .then(() =>{
      console.log("cadastrado com sucesso")
      setAutor('')
      setTitulo('')
    })

    .catch((error) =>{
      console.log("deu erro" + error)
    })
  }

  async function buscarPosts() {
    const postRef = doc(db, "posts", 'bkv7ckQhkUBiKgIjb2uq')

    await getDoc(postRef)

    .then((snapshot) =>{
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
    })

    .catch(() =>{
      console.log('Erro ao buscar')
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

        <button onClick={buscarPosts}>Buscar postes</button>
      </div>
    </div>
  );
}

export default App;

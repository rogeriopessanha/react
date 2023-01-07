
import { useState, useEffect } from 'react';
import { db} from './firebaseConnection'
import { 
  doc, 
  setDoc, 
  collection, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc,
  onSnapshot
} from 'firebase/firestore'

import './app.css'
import { async } from '@firebase/util';

function App() {

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [idPost, setIdPost] = useState('')

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function loadPosts() {
      const unSub = onSnapshot(collection(db, 'posts'), (snapshot) =>{

        let listaPost = []

      snapshot.forEach((doc) =>{
        listaPost.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,

        })
      })

      setPosts(listaPost)

      })
    }

    loadPosts()
  })

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
    // const postRef = doc(db, "posts", 'bkv7ckQhkUBiKgIjb2uq')

    // await getDoc(postRef)

    // .then((snapshot) =>{
    //   setAutor(snapshot.data().autor)
    //   setTitulo(snapshot.data().titulo)
    // })

    // .catch(() =>{
    //   console.log('Erro ao buscar')
    // })

    const postRef = collection(db, "posts")
    await getDocs(postRef)
    .then((snapshot) => {
      let lista = []

      snapshot.forEach((doc) =>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor,

        })
      })

      setPosts(lista)

    })

    .catch((error) =>{
      console.log('deu algum erro na busca!')
    })
  }

  async function editarPost() {
    const docRef = doc(db, "posts", idPost)

    await updateDoc(docRef, {
      titulo: titulo, 
      autor: autor
    })

    .then(() =>{
      console.log('post atualizado com sucesso')
      setIdPost('')
      setTitulo('')
      setAutor('')
    })

    .catch(() =>{
      console.log('erro ao atualizar o post')
    })
  }

  async function excluirPost (id) {
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef)
    .then(() =>{
      alert('Post deletado com sucesso')
    })
  }

  return (
    <div>
      <h1>ReactJS + Firebase </h1>

      <div className="container">

        <label>ID do Post:</label>
        <input type="text" placeholder='Digite o ID do post' value={idPost} onChange={(e) => setIdPost(e.target.value)}/> <br/>

        <label>Titulo:</label> 
        <textarea type="text" placeholder='Digite seu titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)}/> <br/>

        <label>Autor:</label> 
        <input type="text" placeholder='Autor do post' value={autor} onChange={(e) => setAutor(e.target.value)} /> <br/>

        <button onClick={handleAdd}>Cadastrar</button> <br/>

        <button onClick={buscarPosts}>Buscar postes</button> <br/>

        <button onClick={editarPost}>Atualizar post</button>

        <ul>
          {posts.map((post) =>{
            return(
              <li key={post.id}>
                <strong>ID: {post.id}</strong> <br/>
                <span>Titulo: {post.titulo}</span> <br/>
                <span>Autor: {post.autor}</span> <br/>
                <button onClick={() => excluirPost(post.id)}>Excluir</button> <br/> <br/>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

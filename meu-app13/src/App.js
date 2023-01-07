
import { useState, useEffect } from 'react';
import { db, auth} from './firebaseConnection'
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

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import './app.css'
import { async } from '@firebase/util';


function App() {

  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [idPost, setIdPost] = useState('')

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [user, setUser] = useState(false)
  const [userDetail, setUserDetail] =useState({})

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

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(() =>{
      console.log('cadastrado com sucesso')
      setEmail('')
      setSenha('')
    })
    .catch((error) =>{
      if(error.code === 'auth/weak-password'){
        alert('senha muito fraca.')
      }else if(error.code === 'auth/email-already-in-use'){
        alert('email já existe')
      }
    })
  }

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
    .then((value) =>{
      console.log('logado com sucesso')
      console.log(value.user)

      setUserDetail({
        uid: value.user.uid,
        email: value.user.email,
      })

      setUser(true)


      setEmail('')
      setSenha('')
    })

    .catch(() =>{
      console.log('deu erro no login')
    })
  }

  async function fazerLogout() {
    await signOut(auth)
    setUser(false)
    setUserDetail({})
  }

  return (
    <div>
      <h1>ReactJS + Firebase </h1>

      { user && (
        <div>
          <strong>Seja bem-vindo(você está logado)</strong> <br/>
          <span>ID: {userDetail.uid} - Email:{userDetail.email}</span> <br/>
          <button onClick={fazerLogout}>Sair da conta</button>
        </div>
      )}


      <div className="container">
        <h2>Usuarios</h2>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu email'/> <br/>

        <label>Senha</label>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Informe sua senha'/> <br/>
      </div>

      <button onClick={novoUsuario}>Cadastrar</button> <br/>
      <button onClick={logarUsuario}>Fazer login</button>
      <br/> 
      <hr/>



      <div className="container">
        <h2>POSTS</h2>
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

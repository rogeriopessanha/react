
import {useState, useEffect} from 'react'
import './admin.css'
import {auth, db} from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
    doc,
    deleteDoc,
    updateDoc
} from 'firebase/firestore'
import { async } from '@firebase/util'


export default function Admin() {
    const [tarefaInput, setTarefaInput] = useState('')
    const [user, setUser] = useState ({})
    const [edit, setEdit] = useState ({})

    const [tarefas, setTarefas] = useState([])

    useEffect(() =>{
        async function loadTarefas(){
            const userDetail = localStorage.getItem('@detailUser')
            setUser(JSON.parse(userDetail))

            if (userDetail) {
                const data = JSON.parse(userDetail)

                const tarefaRef = collection(db, "tarefas")
                
                const q = query(tarefaRef, orderBy('created', 'desc'), where('userUid', '==', data?.uid))
                
                const unsub = onSnapshot(q, (snapshot) => {
                    let lista = []

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            tarefa: doc.data().tarefa,
                            userUid: doc.data().userUid
                        })
                    })

                    setTarefas(lista)
                })
            }
        }

        loadTarefas()
    }, [])

    async function handleRegistro(e) {
        e.preventDefault()

        if (tarefaInput === '') {
            alert('Digite sua tarefa')
            return
        }

        if (edit?.id) {
            handleUpdateTarefa()
            return
        }

        await addDoc(collection(db, 'tarefas'), {
            tarefa: tarefaInput,
            created: new Date(),
            userUid: user?.uid
        })

        .then(() =>{
            console.log('TAREFA REGISTRADA')
            setTarefaInput('')
        })
        .catch((error) =>{
            console.log('ERRO AO REGISTRAR' + error)
        })
    }

    async function handleLogout() {
        await signOut(auth)
    }

    async function finalizarTarefa(id) {
        const docRef = doc(db, 'tarefas', id)
        await deleteDoc(docRef)
    }

    function editTarefa(item) {
        setTarefaInput(item.tarefa)
        setEdit(item)
    }

    async function handleUpdateTarefa() {
        const docRef = doc(db, 'tarefas', edit?.id)
        await updateDoc(docRef, {
            tarefa: tarefaInput
        })
        .then(() =>{
            console.log('tarefa atualizada')
            setTarefaInput('')
            setEdit({})
        })
        .catch(() =>{
            console.log("erro ao atualizar")
            setTarefaInput('')
            setEdit({})
        })
        
    }


    return(
        <div className="admin-container">
            <h1>Minhas tarefas</h1>

            <form className="form" onSubmit={handleRegistro}>
                <textarea placeholder='Escreva sua tarefa' value={tarefaInput} onChange={(e) => setTarefaInput(e.target.value)} />
                

               {Object.keys(edit).length > 0 ?(
                    <button className="btn-registro" style={{backgroundColor: '#e28605'}} type='submit'>Atualizar tarefa</button>
                ) : (
                    <button ton className="btn-registro" type='submit'>Registrar tarefa</button>
                )}
            </form>

            {tarefas.map((item) => (
                <article key ={item.id} className="list">
                <p>{item.tarefa}</p>
                <hr/>

               <div>
                <button onClick={() => editTarefa(item)} className="btn-editar">Editar</button>

                <button onClick={ () => finalizarTarefa(item.id)} className="btn-finalizar">Finalizar</button>
               </div>
            </article>
            ))}

            <button className="btn-logout" onClick={handleLogout}>Sair</button>
            
        </div>
    )
}
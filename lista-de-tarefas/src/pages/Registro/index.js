
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Registro() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleRegistro(e) {
        e.preventDefault()

        if (email !== '' && password !== '') {
            await createUserWithEmailAndPassword(auth, email, password)
            .then(() =>{
                navigate('/admin', {replace: true})
            })
            .catch(() =>{
                console.log('deu erro')
            })
        }else{
            alert('preencha todos os campos')
        }

    }



    return(
        <div className="home-container">
            <h1>Cadastre-se</h1>
            <span>Vamos criar uma conta?</span>

            <form className="form" onSubmit={handleRegistro}>
                <input type="text" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder='Digite sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Cadastrar</button>
            </form>

            <Link className="button-link" to='/'>
                Já possui uma conta? Faça o login
            </Link>

        </div>
    )
}
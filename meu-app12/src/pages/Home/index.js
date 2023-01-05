
import {Link} from 'react-router-dom'

function Home() {
    return (
      <div>
        <h1>Bem vindo a pagina Home</h1>
        <br/>

        <Link to='/sobre'>Sobre</Link> <br/>
        <br/>
        <Link to='/contato'>Contato</Link>

        <hr/> <br/>

        <Link to='/produto/123'>Acessar Produto 123</Link>
      </div>
    );
  }
  
  export default Home;

import {Link} from 'react-router-dom'

function Home() {
    return (
      <div>
        <h1>Bem vindo a pagina Home</h1>
        <br/>

        <Link to='/sobre'>Sobre</Link>
      </div>
    );
  }
  
  export default Home;
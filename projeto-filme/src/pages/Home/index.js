
import { useEffect, useState } from "react"
import api from '../../services/api'

// URL da api: movie/now_playing?api_key=88e105eb0a18788085edf385811cdb97

function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params:{
                    api_key: '88e105eb0a18788085edf385811cdb97', language: 'pt-BR',
                    page: 1,
                }
            })

            console.log(response.data.results)
        }

        loadFilmes()

    }, [])

    return(
        <div>
            <h1>BEM VINDO(A) A HOME</h1>
        </div>
    )
}

export default Home

import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Registro from '../pages/Registro'
import Admin from '../pages/Admin'

function routesApp() {
    return(
        <Routes>
            <Route path='/' element={ <Home/> }/>

            <Route path='/registro' element={ <Registro/> }/>

            <Route path='/admin' element={ <Admin/> }/>

        </Routes>
    )
}

export default routesApp
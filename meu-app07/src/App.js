import React, {Component} from 'react'
import Feed from './components/Feed'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      feed:[
        {id: 1, username: 'Rogerio', curtidas: 1, comentarios: 0},
        {id: 2, username: 'Gaia', curtidas: 100, comentarios: 84},
        {id: 3, username: 'Isabel', curtidas: 115, comentarios: 18},
        {id: 4, username: 'Maria', curtidas: 210, comentarios: 35}
      ]
    }

  }

  render(){
    return(
      <div>
        {this.state.feed.map((item) => {
          return(

            <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
          )
        })}
      </div>
    )
  }
}

export default App;


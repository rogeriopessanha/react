import React, { Component } from 'react'

class Feed extends Component {
    render() {
        return (
           
            <div key={this.props.id}>
              <h3>{this.props.username} tem: <a>{this.props.curtidas} Curtidas e {this.props.comentarios} Comentarios</a></h3>
              <hr/>
            </div>
        )
    }
}

export default Feed
import React, { useEffect, useState} from 'react'

////https://sujeitoprogramador.com/rn-api/?api=posts

function App() {

  const [nutri, setNutri] = useState([])

  useEffect(() =>{

    function loadApi(){
      let url ='https://sujeitoprogramador.com/rn-api/?api=posts'
      
      fetch(url)
      .then((r) => r.json())
      .then((json) =>{
        
      })
    }

    loadApi()

  }, [])

  return (
    <div>

    </div>
  );
}

export default App;

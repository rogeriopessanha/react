
import{initializeApp} from 'firebase/app'
import{getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyCoievrqmvLVPQMIdc9CHNGcbKcL5FkLqE",
  authDomain: "lista-de-tarefas-14a4c.firebaseapp.com",
  projectId: "lista-de-tarefas-14a4c",
  storageBucket: "lista-de-tarefas-14a4c.appspot.com",
  messagingSenderId: "663561295809",
  appId: "1:663561295809:web:c83c30f6c15fcacdcc0140",
  measurementId: "G-1DFJPRC42G"
};

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {db, auth}
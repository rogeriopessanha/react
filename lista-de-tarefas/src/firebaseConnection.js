
import{initializeApp} from 'firebase/app'
import{getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyAsczaewzRlno2J0eGQ8imz8cplZTZP2II",
  authDomain: "curso-97c69.firebaseapp.com",
  projectId: "curso-97c69",
  storageBucket: "curso-97c69.appspot.com",
  messagingSenderId: "720478012982",
  appId: "1:720478012982:web:c75a7fb1374e0b032b3a97",
  measurementId: "G-E0WPM4B4J0"
};

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {db, auth}
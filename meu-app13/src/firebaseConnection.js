
import{initializeApp} from 'firebase/app'
import{getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyAP-g0x7YJxxfUMFg1mbUOEKfMrN_mPzAQ",
  authDomain: "curso-1cb90.firebaseapp.com",
  projectId: "curso-1cb90",
  storageBucket: "curso-1cb90.appspot.com",
  messagingSenderId: "225090304249",
  appId: "1:225090304249:web:6d7fad2371949cf7958a28",
  measurementId: "G-2338VTV7FD"
};

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {db, auth}
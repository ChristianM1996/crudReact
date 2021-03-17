import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCZJN6p7XyhTlkaWZSONWS4D-gomR9U3bg",
    authDomain: "crud-a70e2.firebaseapp.com",
    projectId: "crud-a70e2",
    storageBucket: "crud-a70e2.appspot.com",
    messagingSenderId: "802793724190",
    appId: "1:802793724190:web:a0846645f4078fd424910f"
  }


  export const firebaseApp =  firebase.initializeApp(firebaseConfig)
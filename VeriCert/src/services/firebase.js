import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyBGdHG_4d2fHGypBJIRs5Hi6mTZL_TP69E",
    authDomain: "vericert-ae5a4.firebaseapp.com",
    databaseURL: "https://vericert-ae5a4.firebaseio.com",
    projectId: "vericert-ae5a4",
    storageBucket: "vericert-ae5a4.appspot.com",
    messagingSenderId: "842839097891",
    appId: "1:842839097891:web:90721287f03d0b3dfc6796"
 }
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()

export default firebase;
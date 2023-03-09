import firebase from 'firebase-admin';
import serviceAccount from '../config/serviceAccount.js';  //getting private key

//initialising firebase-admin
export const firebaseConn = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
}).then('firebase conneceted successfully')
.catch("error in firebase connection");
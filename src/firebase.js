import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyD4hW0NHnhXN7IrA6ys_y65rVwnZKuaNuI",
  authDomain: "phoneauthen-3a4d3.firebaseapp.com",
  projectId: "phoneauthen-3a4d3",
  storageBucket: "phoneauthen-3a4d3.appspot.com",
  messagingSenderId: "52587453812",
  appId: "1:52587453812:web:e41babe675beb3641d6021"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();  
const auth=firebase.auth();




export {db,auth};
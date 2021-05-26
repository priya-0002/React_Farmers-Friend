import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCO1DOSm-xRune0plloUUH9bBl1_7TzsDA",
  authDomain: "krishi-seva-e3925.firebaseapp.com",
  projectId: "krishi-seva-e3925",
  storageBucket: "krishi-seva-e3925.appspot.com",
  messagingSenderId: "539693641628",
  appId: "1:539693641628:web:be69e36c52729b1f32e259"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();  
const auth=firebase.auth();




export {db,auth};
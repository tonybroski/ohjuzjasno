import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX6I5uz7L_Sezqzyk5Xg7V0no_135J0us",
  authDomain: "newsletter-ohjuzjasno.firebaseapp.com",
  projectId: "newsletter-ohjuzjasno",
  storageBucket: "newsletter-ohjuzjasno.appspot.com",
  messagingSenderId: "501214158949",
  appId: "1:501214158949:web:13cccc8dedb7391e3fa68c",
};

//initialize firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

// import firebaseApp from "firebase/compat/app";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCX6I5uz7L_Sezqzyk5Xg7V0no_135J0us",
//   authDomain: "newsletter-ohjuzjasno.firebaseapp.com",
//   projectId: "newsletter-ohjuzjasno",
//   storageBucket: "newsletter-ohjuzjasno.appspot.com",
//   messagingSenderId: "501214158949",
//   appId: "1:501214158949:web:13cccc8dedb7391e3fa68c",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// if (!firebase.apps.length) {
//   firebase.initializeApp(clientCredentials);
// }
// export default db;

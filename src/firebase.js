import firebase from "firebase/compat/app";
// import { collection, writeBatch, doc } from "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import {
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

//import danch do firestore, plik jest później przekazynawny w metodzie addCollectionAnd Documents
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.city.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

//get data from firebase
export const getCityAndDocuments = async () => {
  const collectionRef = collection(db, "city");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const cityMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { city, properties } = docSnapshot.data();
    acc[city.toLowerCase()] = properties;
    return acc;
  }, {});

  return cityMap;
};

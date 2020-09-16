import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config ={
    apiKey: "AIzaSyCB7c-9rlDBnxXRxuf1dJGkDVY5bEqkd0g",
    authDomain: "crwn-db-b2445.firebaseapp.com",
    databaseURL: "https://crwn-db-b2445.firebaseio.com",
    projectId: "crwn-db-b2445",
    storageBucket: "crwn-db-b2445.appspot.com",
    messagingSenderId: "511221764996",
    appId: "1:511221764996:web:96bf6e345ceb5025fb83d1",
    measurementId: "G-XEPHSWL2R4"
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
export default firebase;
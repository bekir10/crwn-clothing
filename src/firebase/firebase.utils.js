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

export const createUserProfileDocument = async (userAuth, additionalData) =>{ //stora u bazu
    if(!userAuth) return; //if user not exist do nothing if exist check query inside firestore to chceck does alrady exists

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){//if doesnt exist --uvijek daje snapshot objekat bez obzira na rezultat
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try {
          await userRef.set({ //ako ne postoji user u bazi kreiraj ga
              displayName,
              email,
              createdAt,
              ...additionalData
          })
      } catch (error) {
          console.log("error creating user", error.message)
      }
  }
  return userRef;

}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) =>{
    const transformedCollection = collections.docs.map(doc =>{
        const {title,items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((accumulator,collection) =>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoNO4nWKAHnkdu6-yhkTXuQmzWfRIqnR4",
    authDomain: "crwn-db-80c34.firebaseapp.com",
    databaseURL: "https://crwn-db-80c34.firebaseio.com",
    projectId: "crwn-db-80c34",
    storageBucket: "crwn-db-80c34.appspot.com",
    messagingSenderId: "613810845937",
    appId: "1:613810845937:web:ce986d4b234d1e28489150",
    measurementId: "G-GNS3H5DC4Q"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
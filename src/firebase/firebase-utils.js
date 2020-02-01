import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCDamwF0qcJSR8f0u50XCDkv6slwxA-e1E",
  authDomain: "ecommerce-app-dni.firebaseapp.com",
  databaseURL: "https://ecommerce-app-dni.firebaseio.com",
  projectId: "ecommerce-app-dni",
  storageBucket: "ecommerce-app-dni.appspot.com",
  messagingSenderId: "131180263398",
  appId: "1:131180263398:web:590ae8736e412b193d8827",
  measurementId: "G-6FE00Z5220"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

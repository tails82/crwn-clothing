import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVyUPIu_EcV2NJONI6f6FkS_nBPiI4pgY",
    authDomain: "crwn-db-6324b.firebaseapp.com",
    databaseURL: "https://crwn-db-6324b.firebaseio.com",
    projectId: "crwn-db-6324b",
    storageBucket: "",
    messagingSenderId: "98403596475",
    appId: "1:98403596475:web:a866ba4413035d84"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
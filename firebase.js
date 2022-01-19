import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB5AOakygJAd2FG06Fjf15jrm4Kr8qGIkg",
    authDomain: "facebook-clone-337904.firebaseapp.com",
    projectId: "facebook-clone-337904",
    storageBucket: "facebook-clone-337904.appspot.com",
    messagingSenderId: "394305846385",
    appId: "1:394305846385:web:33cd10fb8bf589a397efd0"
};

// Check whether its already initialized or rendered in server, if its not then initialize and pass firebaseconfig.If it is, then use the existing initialized app

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
    : firebase.app();
// const db = firebase.firestore();
const db = firebase.firestore();
const storage = firebase.storage();

export { storage, db };
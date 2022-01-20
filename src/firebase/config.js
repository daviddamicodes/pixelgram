import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByV8GefNNfJeZFm6OCzFC1xVio6UaccOI",
    authDomain: "pixelgram-e9902.firebaseapp.com",
    projectId: "pixelgram-e9902",
    storageBucket: "pixelgram-e9902.appspot.com",
    messagingSenderId: "412057148300",
    appId: "1:412057148300:web:ffb5d9c60f35d6987594a9"
};
  
 // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }
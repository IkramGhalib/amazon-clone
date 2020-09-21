// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyALUDCfIRbCt_2INWHFV7_kyRSDs1O5L4A",
  authDomain: "clone-3794b.firebaseapp.com",
  databaseURL: "https://clone-3794b.firebaseio.com",
  projectId: "clone-3794b",
  storageBucket: "clone-3794b.appspot.com",
  messagingSenderId: "261505085872",
  appId: "1:261505085872:web:115377ac49e4717dd4a675",
  measurementId: "G-GJ65NVK0P0",
};
// const firebaseApp = firebase.initializedApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// export { db, auth };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

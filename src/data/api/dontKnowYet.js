import firebase from 'firebase'
import 'firebase/firestore'

import firebaseEnv from '../../../env.js'

const dbConfig = {
  apiKey: firebaseEnv.FIREBASE_API_KEY,
  authDomain: firebaseEnv.FIREBASE_AUTH_DOMAIN,
  databaseURL: firebaseEnv.FIREBASE_DB_URL,
  projectId: firebaseEnv.FIREBASE_PROJECT_ID,
  storageBucket: firebaseEnv.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: firebaseEnv.FIREBASE_MESSAGE_SENDER_ID,
}

firebase.initializeApp(dbConfig);
console.log('testing the db')
export const db = firebase.firestore();

// db.collection("gifts").add({
//   name: "Diamonds",
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
//
// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });

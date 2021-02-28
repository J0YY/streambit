import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDjoGJiE7_kdICZyxfIbAHUGGZyWaVdzlE',
  authDomain: 'stream-bit.firebaseapp.com',
  projectId: 'stream-bit',
  storageBucket: 'stream-bit.appspot.com',
  messagingSenderId: '695972468053',
  appId: '1:695972468053:web:7411b200957dc444470bdc',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

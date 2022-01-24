import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBFAMN0u3LremPvoqZbXLTL2358vMErKr0",
  authDomain: "whatsapp-2-84870.firebaseapp.com",
  projectId: "whatsapp-2-84870",
  storageBucket: "whatsapp-2-84870.appspot.com",
  messagingSenderId: "724234676178",
  appId: "1:724234676178:web:65b777644bb85002d98a0b"
};

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_6-Zyao6rodqNBaIypobI71lA7aSrsQ0",
  authDomain: "vuex-4-firebase-auth-f374c.firebaseapp.com",
  projectId: "vuex-4-firebase-auth-f374c",
  storageBucket: "vuex-4-firebase-auth-f374c.appspot.com",
  messagingSenderId: "556366326258",
  appId: "1:556366326258:web:a542e0b739b94cdc2f636b"
};

//init firebase
initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth()

export { auth }
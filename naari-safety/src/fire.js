import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEZXx36SibtD8AiR237b4WgXdsxM-6KlY",
    authDomain: "naari-safety.firebaseapp.com",
    projectId: "naari-safety",
    storageBucket: "naari-safety.appspot.com",
    messagingSenderId: "256994410921",
    appId: "1:256994410921:web:238eae79ba2789c99744b8"
});
export const auth = getAuth();
export default firebaseApp;
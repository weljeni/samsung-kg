import firebase from 'firebase/compat/app';
import 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyALzn9_Yf5pPJV0Rj2q6FmiUg2Zvhn5rbY",
    authDomain: "samsung-1afd8.firebaseapp.com",
    projectId: "samsung-1afd8",
    storageBucket: "samsung-1afd8.appspot.com",
    messagingSenderId: "1039952952380",
    appId: "1:1039952952380:web:191d1cfc483b86fab45739"
};
const fire = firebase.initializeApp(firebaseConfig)
export default fire
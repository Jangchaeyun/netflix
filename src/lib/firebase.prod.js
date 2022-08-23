import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { seedDatabase } from '../seed';

// we need to somehow seed the database 

// we need a config here
const config = {
    apiKey: "AIzaSyAmpbuloktaPnTY24Yda7imaL8lVConAgM",
    authDomain: "netflix-9f874.firebaseapp.com",
    projectId: "netflix-9f874",
    storageBucket: "netflix-9f874.appspot.com",
    messagingSenderId: "159143062064",
    appId: "1:159143062064:web:dde8adb94d245ddaa1dbf5"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
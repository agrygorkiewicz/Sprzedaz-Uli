import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
         apiKey: "AIzaSyDG9rhy_2mBwKhbNeo58C4lT6pB_RJ1IGY",
    authDomain: "sprzedazuli2.firebaseapp.com",
    projectId: "sprzedazuli2",
    storageBucket: "sprzedazuli2.appspot.com",
    messagingSenderId: "946032787476",
    appId: "1:946032787476:web:61ce859e093d2d8e3aa701"
})

const db = firebaseApp.firestore();

export { db };
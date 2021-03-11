import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyC4O6wV5JRc5oE5HboNl_M9KggHHm89iqQ",
        authDomain: "sprzedazuli.firebaseapp.com",
        projectId: "sprzedazuli",
        storageBucket: "sprzedazuli.appspot.com",
        messagingSenderId: "49055142501",
        appId: "1:49055142501:web:ca4c303a9155c6c81f2c8c"
})

const db = firebaseApp.firestore();

export { db };
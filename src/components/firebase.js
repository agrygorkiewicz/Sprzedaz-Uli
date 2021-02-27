import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD-AI0GHu5ZSsUjXkEDcvJVbuudizU6zZM",
        authDomain: "contact-form-c7343.firebaseapp.com",
        databaseURL: "https://contact-form-c7343.firebaseio.com",
        projectId: "contact-form-c7343",
        storageBucket: "contact-form-c7343.appspot.com",
        messagingSenderId: "1024157331745",
        appId: "1:1024157331745:web:19dab53c859d702cf68e60"
})

const db = firebaseApp.firestore();

export { db };
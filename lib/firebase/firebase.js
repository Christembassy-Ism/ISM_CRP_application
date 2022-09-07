import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBHHlHErHFRq-Sv82V2ZQryY9M9KPSCWk0",
    authDomain: "nenyehairs.firebaseapp.com",
    projectId: "nenyehairs",
    messagingSenderId: "89472471231",
    appId: "1:89472471231:web:b4ee233efb55d66486360a",
    measurementId: "G-QJSYPEKETF"
})

export const auth = app.auth();
export const fb = firebase;

export default app; 
import firebase from 'firebase/app'
import 'firebase/firestore'


// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyBoor5H5_CrjLIWx1ALRuL2gCUXsSthaLM",
        authDomain: "cs313-8ce83.firebaseapp.com",
        projectId: "cs313-8ce83",
        storageBucket: "cs313-8ce83.appspot.com",
        messagingSenderId: "663250967090",
        appId: "1:663250967090:web:6c95f071427b8f0f543a2b",
        measurementId: "G-0SZ9XBJDDP"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
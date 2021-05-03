import app from "firebase/app";
import "firebase/auth"
import "firebase/firebase-firestore"


var firebaseConfig = {
    apiKey: "AIzaSyDxFuYvYPsm53Q_5uvq5GZmy9qefOi7t_U",
    authDomain: "trip-advisor-2759d.firebaseapp.com",
    projectId: "trip-advisor-2759d",
    storageBucket: "trip-advisor-2759d.appspot.com",
    messagingSenderId: "756306939148",
    appId: "1:756306939148:web:362df3149468ebde6f8d29",
    measurementId: "G-5SLMPW8877"
  };

class FirebaseHelper {
    constructor() {
        const fb = app.initializeApp(firebaseConfig);
        this.auth = fb.auth();
        this.db = fb.firestore();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut();
    }

    register(email, password) {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }
}

export default new FirebaseHelper()
import firebase from "firebase/app";

let firebaseConfig = {
  apiKey: "AIzaSyDxFuYvYPsm53Q_5uvq5GZmy9qefOi7t_U",
  authDomain: "trip-advisor-2759d.firebaseapp.com",
  projectId: "trip-advisor-2759d",
  storageBucket: "trip-advisor-2759d.appspot.com",
  messagingSenderId: "756306939148",
  appId: "1:756306939148:web:362df3149468ebde6f8d29",
  measurementId: "G-5SLMPW8877"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

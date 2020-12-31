import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCSCq1lu_sAHk5AIsv-bKB8D7hfFsBfR3I",
    authDomain: "app-quinta.firebaseapp.com",
    projectId: "app-quinta",
    storageBucket: "app-quinta.appspot.com",
    messagingSenderId: "319404196924",
    appId: "1:319404196924:web:aa53078ed657b86780af39"
};
  
// Initialize Firebase
export const firebaseapp = firebase.initializeApp(firebaseConfig);
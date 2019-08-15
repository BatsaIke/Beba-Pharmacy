import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDUXv01ynQEAjfLnDvygFle2Ep9-AVE6WE",
    authDomain: "bebapharmacydatabase.firebaseapp.com",
    databaseURL: "https://bebapharmacydatabase.firebaseio.com",
    projectId: "bebapharmacydatabase",
    storageBucket: "bebapharmacydatabase.appspot.com",
    messagingSenderId: "982004191636",
    appId: "1:982004191636:web:9847895079f2ad05"
  };
 
    // Initialize Firebase
      
 
   const firebaseApp =  firebase.initializeApp(firebaseConfig);
  export default firebaseApp;
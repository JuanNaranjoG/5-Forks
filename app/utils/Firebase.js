import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAlH0f_RvqPIny0EAxjA8MAQW7PvUua0sw",
    authDomain: "forks-7a500.firebaseapp.com",
    databaseURL: "https://forks-7a500.firebaseio.com",
    projectId: "forks-7a500",
    storageBucket: "forks-7a500.appspot.com",
    messagingSenderId: "365205884074",
    appId: "1:365205884074:web:a73361ce32f446591a14d3"
  };

  export const firebaseapp = firebase.initializeApp(firebaseConfig);
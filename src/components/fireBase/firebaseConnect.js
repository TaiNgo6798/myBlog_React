import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDlNXMxYghHuDebCp9NKeopcHybKK_28k8",
    authDomain: "notereact-28d30.firebaseapp.com",
    databaseURL: "https://notereact-28d30.firebaseio.com",
    projectId: "notereact-28d30",
    storageBucket: "notereact-28d30.appspot.com",
    messagingSenderId: "613166740770",
   // appId: "1:613166740770:web:21fc8b8adc636d8d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const Data = firebase.database();

 
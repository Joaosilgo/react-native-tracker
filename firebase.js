
import * as firebase from 'firebase';

/*import "firebase/firestore"; */
import '@firebase/firestore';
{/*
import '@firebase/auth';
import '@firebase/firestore';
 */}

var firebaseConfig = {
    apiKey: "AIzaSyAFsKfOkAJ7dMMnx_oApZGWRlorh3w8ddI",
    authDomain: "reactnative-297303.firebaseapp.com",
    databaseURL: "https://reactnative-297303.firebaseio.com",
    projectId: "reactnative-297303",
    storageBucket: "reactnative-297303.appspot.com",
    messagingSenderId: "100763655378",
    appId: "1:100763655378:web:3937dfa24b1803ebab210b",
    measurementId: "G-S60V38JK3Z"
  };
  


  
//firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

/*export default firebase; */

const db = firebase.firestore();

export default {
  firebase,
  db
};

{/* 
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}



export { firebase };

*/}
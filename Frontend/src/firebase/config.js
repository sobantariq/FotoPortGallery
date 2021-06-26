//import * as firebase from "firebase/app";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAvLA7amBAZAZ4jRVk2W4m8Cc8evAYRibY",
  authDomain: "gallery-project-417a5.firebaseapp.com",
  projectId: "gallery-project-417a5",
  storageBucket: "gallery-project-417a5.appspot.com",
  messagingSenderId: "937708986854",
  appId: "1:937708986854:web:09220fd3f795b95a4e7627",
  measurementId: "G-W0QT9D4PF7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwpoJZTAYR7B3yveXVbIMy8ck0ndi2X3M",
  authDomain: "live-chat-575cd.firebaseapp.com",
  projectId: "live-chat-575cd",
  storageBucket: "live-chat-575cd.appspot.com",
  messagingSenderId: "536278628850",
  appId: "1:536278628850:web:301bf340862cb5017b136b",
};

// init firebase
firebase.initializeApp(firebaseConfig);


const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };

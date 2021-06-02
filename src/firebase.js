import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyAI5JM3fYiqNSHA-LQv1j0gnkXH9Do5nAA",
  authDomain: "expensestrackerapp-d6a3a.firebaseapp.com",
  projectId: "expensestrackerapp-d6a3a",
  storageBucket: "expensestrackerapp-d6a3a.appspot.com",
  messagingSenderId: "851194227728",
  appId: "1:851194227728:web:8c1f933a65c6ee91a16e95",
  measurementId: "G-2VE9QL1WBL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase
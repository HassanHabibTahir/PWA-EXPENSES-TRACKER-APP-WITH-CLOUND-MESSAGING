import firebase from 'firebase'

importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');



if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function (registration) {
      console.log("reistration socpe", registration.scope)
    })
    .catch(err => console.log('service worker not registered', err));
}

firebase.initializeApp({
  messagingSenderId: "851194227728",
})
const initMessgaing = firebase.messaging()



// const firebaseConfig = {
//   apiKey: "AIzaSyAI5JM3fYiqNSHA-LQv1j0gnkXH9Do5nAA",
//   authDomain: "expensestrackerapp-d6a3a.firebaseapp.com",
//   projectId: "expensestrackerapp-d6a3a",
//   storageBucket: "expensestrackerapp-d6a3a.appspot.com",
//   messagingSenderId: "851194227728",
//   appId: "1:851194227728:web:8c1f933a65c6ee91a16e95",
//   measurementId: "G-2VE9QL1WBL"
// };
// firebase.initializeApp(firebaseConfig);
// firebase.messaging()
//   export default firebase;
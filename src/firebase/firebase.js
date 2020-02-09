import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCv8R2Da4v3QH1GEavUFwECCskVLa_SRf0",
  authDomain: "money-e010b.firebaseapp.com",
  databaseURL: "https://money-e010b.firebaseio.com",
  projectId: "money-e010b",
  storageBucket: "money-e010b.appspot.com",
  messagingSenderId: "1022682232570",
  appId: "1:1022682232570:web:539e6ee41e4736e118fb43"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database };
// database.ref().set({
//   age: 37,
//   job: {
//     company: "Google",
//     title: "Software Developer"
//   },
//   location: {
//     city: "Hengelo",
//     country: "Netherlands"
//   },
//   name: "Marcin Widomski",
//   stressLevel: 9
// });

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// database.ref().on("value", snapshot => {
//   const { job, name } = snapshot.val();
//   console.log(`${name} is a ${job.title} at ${job.company}.`);
// });

// database.ref("notes").push({
//   title: "I jeszcze raz",
//   body: "This is my note"
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnappshot => {
//     expenses.push({
//       id: childSnappshot.key,
//       ...childSnappshot.val()
//     });
//   });
//   console.log(expenses);
// });

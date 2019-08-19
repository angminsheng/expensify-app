import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: "",
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// let expenses = [
//   {
//     description: "first one",
//     note: "also first",
//     amount: 10,
//     createdAt: 11
//   },
//   {
//     description: "second one",
//     note: "also second",
//     amount: 10,
//     createdAt: 11
//   },
//   {
//     description: "third one",
//     note: "also third",
//     amount: 10,
//     createdAt: 11
//   }
// ];

// database.ref("expenses").remove();

// expenses.forEach(expense => {
//   database.ref("expenses").push(expense);
// });

// database.ref("expenses").once("value", snapshot => {
//   let array = [];
//   snapshot.forEach(childSnapshot => {
//     array.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(array);
// });

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", (snapshot, key) => {
//   console.log(key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.val());
// });

// // database
// //   .ref()
// //   .set({
// //     name: "Min Sheng",
// //     age: "27",
// //     stressLevel: 6,
// //     job: {
// //       title: "Front end developer",
// //       company: "Ironhack"
// //     },
// //     isSingle: false,
// //     location: {
// //       city: "Penang",
// //       country: "Malaysia"
// //     }
// //   })
// //   .then(() => console.log("Added to database"))
// //   .catch(err => console.log(err));

// // database
// //   .ref("location")
// //   .set({
// //     city: "Duisburg",
// //     country: "Germany"
// //   })
// //   .then(() => console.log("Added to database"))
// //   .catch(err => console.log(err));

// // database
// //   .ref("location/city")
// //   .set("Berlin")
// //   .then(() => console.log("Added to database"))
// //   .catch(err => console.log(err));

// // database
// //   .ref("attribute")
// //   .set({
// //     height: "170cm",
// //     weight: "72kg"
// //   })
// //   .then(() => console.log("Added to database"))
// //   .catch(err => console.log(err));

// // database
// //   .ref("attribute")
// //   .remove()
// //   .then(() => console.log("removed"))
// //   .catch(err => console.log(err));

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Google",
// //   "location/city": "Munich"
// // });

// // database
// //   .ref()
// //   .once("value")
// //   .then(dataSnapshot => {
// //     console.log(dataSnapshot.val());
// //   });

// // const onValueChange = database.ref().on(
// //   "value",
// //   snapshot => {
// //     console.log(snapshot.val());
// //   },
// //   e => {
// //     console.log(e);
// //   }
// // );

// // setTimeout(() => {
// //   database.ref().update({
// //     stressLevel: 0
// //   });
// // }, 3000);

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 5000);

// // setTimeout(() => {
// //   database.ref().update({
// //     stressLevel: 5
// //   });
// // }, 6000);
// // database.ref().on("value", snapshot => {
// //   const {
// //     name,
// //     job: { title, company }
// //   } = snapshot.val();
// //   console.log(`${name} is a ${title} at ${company}`);
// // });

// // database.ref().update({
// //   name: "Andrew",
// //   "job/title": "software developer",
// //   "job/company": "Amazon"
// // });

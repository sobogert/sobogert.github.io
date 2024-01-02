// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjG6FyELKW9Sx1jvVH0OQbYNmNvlUrkuU",
  authDomain: "sofi-bogert-site.firebaseapp.com",
  projectId: "sofi-bogert-site",
  storageBucket: "sofi-bogert-site.appspot.com",
  messagingSenderId: "645668784949",
  appId: "1:645668784949:web:7a91de0242ceb49ded5a7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function validateForm() {
  // make sure that name and email fields are filled out
  console.log("submit form");
  // If not, turn boxes red and show message reminding user to fill out fields
  // Once validated, add user to database and send email to me and user
}
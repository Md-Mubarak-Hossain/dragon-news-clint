// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVLeRKkpmBSQCPCR5ptN1_8t5ICE-uBYo",
    authDomain: "dragon-news-clint-app.firebaseapp.com",
    projectId: "dragon-news-clint-app",
    storageBucket: "dragon-news-clint-app.appspot.com",
    messagingSenderId: "447728740814",
    appId: "1:447728740814:web:9339b7129b456efc6de39f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
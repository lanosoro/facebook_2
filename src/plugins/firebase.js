import fb from "firebase/app"
export const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()


const firebaseConfig = {
  apiKey: "AIzaSyDScbkc8AvZPH4Rwl6I05tvqKHIcHZpsuY",
  authDomain: "facebook-15fe4.firebaseapp.com",
  projectId: "facebook-15fe4",
  storageBucket: "facebook-15fe4.appspot.com",
  messagingSenderId: "1095577396754",
  appId: "1:1095577396754:web:5cf2a24e59924571bbdacb",
  measurementId: "G-QNJH9YT9TN"
};
// Initialize Firebase


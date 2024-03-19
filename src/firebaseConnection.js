
import { initializeApp } from 'firebase/app'
import { getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCeUg_3KXkK4FMa0IvQgqajtRaRmdzaK7A",
    authDomain: "dashboard-29e0a.firebaseapp.com",
    projectId: "dashboard-29e0a",
    storageBucket: "dashboard-29e0a.appspot.com",
    messagingSenderId: "53032603148",
    appId: "1:53032603148:web:8cb2cc861fdd1e4e146829",
    measurementId: "G-XVRXJH2H1Y"
  };


  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp)

  export {  auth };
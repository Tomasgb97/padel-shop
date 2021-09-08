import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const config = {

    apiKey: "AIzaSyBHM_gy-Ub0Da9FXUL1BDjba0Sp_MaT_7g",
    authDomain: "padel-shop.firebaseapp.com",
    databaseURL: "https://padel-shop-default-rtdb.firebaseio.com",
    projectId: "padel-shop",
    storageBucket: "padel-shop.appspot.com",
    messagingSenderId: "505185563188",
    appId: "1:505185563188:web:47ebe20d6bed71ef49d061",
    measurementId: "G-MM9G0WGC0E"
}

 const initfirebase = initializeApp(config);

 
 
 const db = () => getFirestore(initfirebase);

 let querySnapshot = async () => await getDocs(collection(db(), "Paletas"))
 .then(result => console.log(result.docs.map((doc) => doc.data())));
  




 export {initfirebase, db, querySnapshot};
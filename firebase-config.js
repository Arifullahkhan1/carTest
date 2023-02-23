// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app"; 
//import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';
const firebaseConfig = {
  apiKey: "AIzaSyDZ_RfdaC-yzhMbba3Dzi_tQj37DrdvweU",
  authDomain: "car-service-37d13.firebaseapp.com",
  projectId: "car-service-37d13",
  storageBucket: "car-service-37d13.appspot.com",
  messagingSenderId: "1029577823272",
  appId: "1:1029577823272:web:837831e0cbf09923a9d11d"
};
//initilize FireBase
//const app = initializeApp(firebaseConfig);
//export const  auth = getAuth(app);
const app = initializeApp(firebaseConfig);
// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
 
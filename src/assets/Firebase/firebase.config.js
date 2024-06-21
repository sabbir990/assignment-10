import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDD8j87gqSvMPb2cJmdu4zrtsQhTz2CHFc",
  authDomain: "assignment-10-60be9.firebaseapp.com",
  projectId: "assignment-10-60be9",
  storageBucket: "assignment-10-60be9.appspot.com",
  messagingSenderId: "624404834618",
  appId: "1:624404834618:web:17687b7a8d88dd25710803"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
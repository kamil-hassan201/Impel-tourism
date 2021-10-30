import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const firebaseAuthInitializer = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthInitializer;
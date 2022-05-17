import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhXY8ugPVGXqK-AiSn8aMhEBeonR3UCvQ",
  authDomain: "vuex4-fb-auth-e649d.firebaseapp.com",
  projectId: "vuex4-fb-auth-e649d",
  storageBucket: "vuex4-fb-auth-e649d.appspot.com",
  messagingSenderId: "327682949619",
  appId: "1:327682949619:web:663741c8dcdef19ebc1286",
};

//   init firebase
initializeApp(firebaseConfig);

// init firebase auth
const auth = getAuth();

export { auth };

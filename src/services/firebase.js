
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const firebaseConfig = {
  apiKey: "AIzaSyALeZU_8wWX_mM3dFjz2gbqgADruBBQVbo",
  authDomain: "auth-5aacc.firebaseapp.com",
  projectId: "auth-5aacc",
  storageBucket: "auth-5aacc.appspot.com",
  messagingSenderId: "621330404880",
  appId: "1:621330404880:web:ede706f54cf5014c169c95",
  measurementId: "G-7TVHD4WXC9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const provider= new GoogleAuthProvider();

export const signInWithGoogle=()=>{
 
    signInWithPopup(auth,provider).then((result)=>{
     
            console.log(result);
            const name=result.user.displayName;
            const email=result.user.email
            const profilePic=result.user.photoURL;
            localStorage.setItem("name",name)
            localStorage.setItem("email",email)
            localStorage.setItem("profilePic",profilePic)
            alert("Login Successfull ! \n Now click on home page")
          
            
    }).catch(error=>console.log(error))
}


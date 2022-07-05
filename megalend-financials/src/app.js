/*firebase authentication*/
import { initializeApp } from "firebase/app";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithPopup,
   GoogleAuthProvider
} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCIMC-BGvBeO4VUg7DbPJq-F0Z_z87LyAM",
   authDomain: "eazy-mart-auth.firebaseapp.com",
   projectId: "eazy-mart-auth",
   storageBucket: "eazy-mart-auth.appspot.com",
   messagingSenderId: "749499150162",
   appId: "1:749499150162:web:f49130694ac44b3c40948b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

let signupForm = document.querySelector('.signupForm ')
signupForm.addEventListener('submit', async (e) => {
   e.preventDefault()
   const email = signupForm.email.value
   const password = signupForm.password.value

   try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      signupForm.reset()
      console.log(cred)
   }
   catch (error) {
      console.log(error.message)
   }

})


const handleGoogleSignup = async () => {
   const provider = new GoogleAuthProvider()
   try {
      const cred = await signInWithPopup(auth, provider)
      console.log(cred)
   } catch (error) {
      console.log(error.message)
   }
}

/*end of authentication */


function changeContent() {
   var text = "Welcome to megaland finance limited, Megalend is an organisation that offers loans woldwide that can defer from one currency to another";
   var text_1 = "Megalend conpany is able to offer loans to various persons all over the world no matter which currrency you are using.";

   document.getElementById("introduction").innerHTML = text + "<br>" + text_1
}


console.log('hello from app.js');
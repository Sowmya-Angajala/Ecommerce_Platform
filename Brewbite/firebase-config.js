// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // signOut,
  // onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyDCv77dyT60E5YM0IwqLkpOpSSCTrigUWE",
  authDomain: "authenticate-56ae0.firebaseapp.com",
  databaseURL: "https://authenticate-56ae0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "authenticate-56ae0",
  storageBucket: "authenticate-56ae0.appspot.com",
  messagingSenderId: "644131826602",
  appId: "1:644131826602:web:76b7bee06f711c666e59d3",
  measurementId: "G-E76HLJH4H5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
// Signup function 
function register() {
  const signupBtn = document.getElementById('signupBtn');
  if (!signupBtn) {
    console.error('Signup button not found in DOM!');
    return;
  }

  signupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const role = document.getElementById('role').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Save role to Realtime Database
        set(ref(database, "users/" + user.uid), {
          email: email,
          role: role
        }).then(() => {
          alert("Signup successful! Role saved!");
          setTimeout(() => {
            window.location.href = "login.html";
          }, 100);
        }).catch((error) => {
          console.error("Failed to write to DB:", error);
          alert("DB Error: " + error.message);
        });
      })
      .catch((error) => {
        console.error("Signup error:", error);
        document.getElementById('signup-message').innerText = error.message;
      });
  });
}
window.addEventListener('DOMContentLoaded', () => {
  register();
});


// Sign in/Login function 

function login() {
  const loginBtn = document.getElementById('loginBtn');
  if (!loginBtn) {
    console.error('Login button not found in DOM!');
    return;
  }

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Get user's role from Firebase Realtime Database
        const dbRef = ref(database);
        get(child(dbRef, `users/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const role = snapshot.val().role;

              if (role === "vendor") {
                window.location.href = "vendor.html";
              } else if (role === "customer") {
                window.location.href = "customerdashboard.html";
              } else {
                alert("Unknown role!");
              }
            } else {
              alert("User data not found!");
            }
          })
          .catch((error) => {
            console.error("Error fetching user role:", error);
            alert("Database Error: " + error.message);
          });
      })
      .catch((error) => {
        console.error("Login error:", error);
        document.getElementById("login-message").innerText = error.message;
      });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  login();
});


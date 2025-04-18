// firebase-init.js
// Firebase core + modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCkFOc0BwRqmR2LkjHj0vwXSAS1h4BlBCE",
  authDomain: "horse-game-by-sxxrrx.firebaseapp.com",
  projectId: "horse-game-by-sxxrrx",
  storageBucket: "horse-game-by-sxxrrx.firebasestorage.app",
  messagingSenderId: "87883054918",
  appId: "1:87883054918:web:4771a90eb5c6a3e7c0ef47",
  measurementId: "G-ZW6W5HVXBJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
/storeHorses: [
  {
    "id": "store_1",
    "name": "Midnight Comet",
    "breed": "Thoroughbred",
    "coatColor": "Black",
    "gender": "Mare",
    "age": {"years": 3, "months": 0},
    "price": 1000
  },
  {
    "id": "store_2",
    "name": "Golden Whisper",
    "breed": "Arabian",
    "coatColor": "Palomino",
    "gender": "Stallion",
    "age": {"years": 4, "months": 2},
    "price": 1200
  }
]

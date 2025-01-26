// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyB-Cd-tF6YKLMA2TBPc5A7499uVMn-oUCc",
  authDomain: "bautizoyamileth.firebaseapp.com",
  projectId: "bautizoyamileth",
  storageBucket: "bautizoyamileth.firebasestorage.app",
  messagingSenderId: "168927946073",
  appId: "1:168927946073:web:0f2b75cc92c5ffe2c59848",
  measurementId: "G-M56FEJSY4V"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Habilita Analytics si es necesario (opcional)
const analytics = getAnalytics(app);

export { app, analytics };

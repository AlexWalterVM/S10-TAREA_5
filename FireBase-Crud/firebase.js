  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3bWhCas437DOqFfrgduWB1OSuYAqlaEc",
    authDomain: "cruds-con-js-y-firebase9.firebaseapp.com",
    projectId: "cruds-con-js-y-firebase9",
    storageBucket: "cruds-con-js-y-firebase9.appspot.com",
    messagingSenderId: "973994249540",
    appId: "1:973994249540:web:f6614872099c7b492c5b11"
};

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
   * Guardar nueva tarea en el Firestore
   * @param {string} title El titulo de la tarea
   * @param {string} description La descricpión de la tarea
   */
export const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
    onSnapshot(collection(db, "tasks"), callback);

/**
   *
   * @param {string} id Task ID
   */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
export const getTask = (id) => getDoc(doc(db, "tasks", id)); 
export const updateTask = (id, newFields) =>
    updateDoc(doc(db, "tasks", id), newFields);
export const getTasks = () => getDocs(collection(db, "tasks"));
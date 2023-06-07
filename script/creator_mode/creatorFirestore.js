import './creatorForm.js'
/* import '../hamburguer.js' */
/* import './storageimg.js'; */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, addDoc, getDocs, collection, onSnapshot, serverTimestamp, orderBy, query, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
import { auth } from "../firebase.js";

import '../logout.js';
import firebaseConfig from "../firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/*------------------si no esta autenticado se dirige a index.html-------------- */
onAuthStateChanged(auth, async (user) => {
    if (!user) {
        window.location.href = "index.html";
    }
})


//---------------------------------------------------------------------

let formCreator = document.querySelector("#creatorForm");
console.log(formCreator)

let inputTitleCard = document.querySelector("#titleCard");
let inputTextareaCard = document.querySelector("#textareaCard");
let inputColorCard = document.querySelector("#colorCard");
let inputWordsCard = document.querySelector("#wordsCard");
let inputTraductionWord = document.querySelector("#TraductionWord");




/* confirmación para creacion de la card */
formCreator.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (confirm("¿ Confirmas la creación de esta chameleonCard ?")) {
        addDoc(collection(db, "card"), { title: inputTitleCard.value, textarea: inputTextareaCard.value, word: inputWordsCard.value, traduction: inputTraductionWord.value, color: inputColorCard.value, createAt: serverTimestamp() }); /* generando id */
    }
    else {
        alert("Creación cancelada !");
    }

    /*  formCreator.reset(); */

})




/* ------------------------------------------ */
let ulTopicsContainer = document.querySelector("#topics_ul");


// --------------------cargar el titulo desde firestore en un button-------------
let queryCards = query(collection(db, 'card'), orderBy('createAt', 'desc'));

onSnapshot(queryCards, function (querySnapshot) {
    ulTopicsContainer.innerHTML = '';
    querySnapshot.forEach(function (doc) {
        let objetoDocumento = doc.data();
        /* console.log(objetoDocumento); */


        const li = document.createElement("li");
        li.innerHTML = `
            <div class="topics_button">
              <details>
               <summary>
                 <span style =" font-weight:bolder">title: </span> ${objetoDocumento.title}
               </summary>
               <div>
                 <span style =" font-weight:bolder">text: </span>:${objetoDocumento.textarea} <br>
                 <span style =" font-weight:bolder">word: </span>:${objetoDocumento.word} <br>
                 <span style =" font-weight:bolder">traduction: </span>:${objetoDocumento.traduction} <br>
                 <span style =" font-weight:bolder">color: </span>:${objetoDocumento.color}<br>
                 <span style =" font-weight:bolder">Date: </span>:${objetoDocumento.createAt.toDate()} <br>
                 <span style =" font-weight:bolder">Id: </span>:${doc.id} 
               </div>
              </details>
              <div style = "text-align: center">
                <button class="btn_blue" id="btnDeleteDoc" style = "background-color: red; color:white; padding:0.2rem">
                    <span class="material-symbols-outlined">
                    delete
                    </span>
                </button>
              </div>
            </div>
        `;


        /* se obtuvo los id de los documentos con doc.id */

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                ulTopicsContainer.appendChild(li);
            })
        } else {
            ulTopicsContainer.appendChild(li);
        }

    });

});

/* código para borrar un docuemnto - card */
/* document.getElementById("btnDeleteDoc").addEventListener("click", function () {
      const deleteCard = async(id)=>{
          await deleteDoc(doc(db, "card", id));
      } 
})
 */
/*   button de delete de documento, falta implementar
             <div style = "text-align: center">
               <button class="btn_blue" id="btnDeleteDoc" style = "background-color: red; color:white; padding:0.3rem 1rem">Delete</button>
              </div>
*/




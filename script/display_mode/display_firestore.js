import '../hamburguer.js';
import "./quiz_readcards.js";
/* import "../modal.js" */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getFirestore, addDoc, getDocs, collection, onSnapshot, serverTimestamp, orderBy, query } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

import firebaseConfig from "../firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

let topicsContainer = document.querySelector("#topics_container");

let displayTitle = document.querySelector("#displayTitleCard");
let displayText = document.querySelector("#displayTextCard");


let queryCards = query(collection(db, 'card'), orderBy('createAt','desc'));

onSnapshot(queryCards, function (querySnapshot) {
    topicsContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
        /* onsole.log(doc.id, " => ", doc.data()); */
        let objetoDoc = doc.data();
        // console.log(objetoDocumento); 
        let texta = objetoDoc.textarea;

        let newtexta = texta.replace(objetoDoc.word,`<span style = "color: ${objetoDoc.color} " title = "${objetoDoc.traduction}" > ${objetoDoc.word} </span>`);

        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card card-previewer">
            <div class="card_image">
                <img src="/images/logo/icon_logo.png" alt="imagen" id="cardImg">
            </div>
            <h2 class="card_title" id="displayTitleCard">${objetoDoc.title} </h2>
            <div class="card_decoration decoration-top">
              <div class="decoration_circle circle_top"></div>
              <div class="decoration_line"></div>
            </div>
            <div class="card_text">
               <p id="displayTextCard"> ${newtexta} </p>
            </div>

            <div class="card_decoration decoration-bottom">
               <div class="decoration_circle circle_bottom"></div>
               <div class="decoration_line"></div>
            </div>
            <div class="card_like">
               <img src="/images/icons/pulgar-arriba.png" alt="">
            </div>
        </div>
        <div class = "complemento-bottom-card">
            <a class = "topics_button btn_blue style_a" href="#readcards">Listo para un reto!</a>
            <p>Puedes dejar tu respuesta aqui:</p>
            <a class = "topics_button style_a" href="https://www.facebook.com/profile.php?  id=100089940139227"><img src="/images/icons/face.png" alt=""></a>
        <div>

        `;
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                topicsContainer.appendChild(div);
            })
        } else {
            topicsContainer.appendChild(div);
        }

    });

}); 


//------------------------------------------

const btn_desplegar = document.querySelector(".btn_desplegar")
const topics_container = document.querySelector(".topics_container")
const arrow_drop_down = document.querySelector(".arrow_drop_down")
const arrow_drop_up = document.querySelector(".arrow_drop_up")

topics_container.style.display = 'none';
arrow_drop_up.style.display = 'none';

btn_desplegar.addEventListener("click",function () {
    if (topics_container.style.display != 'flex') {
        topics_container.style.display = 'flex';
        arrow_drop_up.style.display = 'flex';
        arrow_drop_down.style.display = 'none';
        btn_desplegar.textContent = "Ocultar Cards"
    }
    else if(topics_container.style.display != 'none') {
        topics_container.style.display = 'none';
        arrow_drop_up.style.display = 'none';
        arrow_drop_down.style.display = 'flex';
        btn_desplegar.textContent = "Desplegar Cards"
    }
})



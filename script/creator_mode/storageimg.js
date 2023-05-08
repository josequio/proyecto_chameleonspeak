import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";

import firebaseConfig from "../firebaseConfig.js";

const app = initializeApp(firebaseConfig);

//Create a root reference
const storage = getStorage(app);
const storageRef = ref(storage);

// traer elemnto input, file con el dom  
let inputImageCard = document.querySelector("#imageCard");
let formCreator = document.querySelector("#creatorForm");


formCreator.addEventListener('submit',function(ev){
    ev.preventDefault();
    let inputImageCard = document.querySelector("#imageCard");
    let file = inputImageCard.files[0];
});

/* function uploadImage() {
    //Creamos referencia de la imagen
    const imagesRef = ref(storage, 'images');

   let fileImage =  inputImageCard.files[0];  
    // 'file' comes from the Blob or File API
    uploadBytes(imagesRef, fileImage).then(function (snapshot) {
        console.log('Uploaded a blob or file!');
    });
}
 */
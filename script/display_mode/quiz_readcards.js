/* Respuestas del formulario */
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const answer = ["opcion1a","opcion2b","opcion3c"];
console.log(answer)


const quiz_form = document.getElementById('form_quiz');
const question1 = document.querySelector('.question1');
const question2 = document.querySelector('.question2');
const question3 = document.querySelector('.question3');
let questions = [question1, question2, question3];

const modalCongratulation = document.querySelector('.modal_congratulation');
const modalCongratulationP = document.querySelector('.modal_congratulation-p');
const modalCongratulationImg = document.querySelector('.modal_congratulation-img');

const btnNext = document.querySelector(".btn_next");
const btnAgain = document.querySelector(".btn_again");

modalCongratulation.style.display = 'none';

quiz_form.addEventListener("submit", function(ev){
    ev.preventDefault();
/* obtener los valores del formulario con formData almacenados en un objeto */
    let formData = new FormData(quiz_form);
    let formDataObj = Object.fromEntries(formData.entries());

    /* console.log(formDataObj); */
/* Pasando los valores del objeto a un arreglo */
    let receivedResponses = [];
    for (let propiedad in formDataObj) {
        console.log(formDataObj[propiedad])
        receivedResponses.push(formDataObj[propiedad]);
    }

    console.log(receivedResponses);

    for (let i = 0; i < answer.length; i++) {
        
        if( answer[i] == receivedResponses[i]){
            /* questions[i].innerHTML = ' <span class="material-symbols-outlined">check_circle</span>' */
            questions[i].innerHTML = '<img src="/images/icons/comprobado.png" alt="">'

        }
        else if(receivedResponses.length < 1){
            /* questions[i].innerHTML = ' <span class="material-symbols-outlined"> warning</span> ' */
            questions[i].innerHTML = '<img src="/images/icons/advertencia.png" alt="">'
        }
        else if( answer[i] !== receivedResponses[i]){
            /* questions[i].innerHTML = '<span class="material-symbols-outlined">cancel</span>' */
            questions[i].innerHTML = '<img src="/images/icons/incorrecto.png" alt="">'
        }
        
    }

    if(answer.every((valor, indice) => valor === receivedResponses[indice])){
        confetti();
        modalCongratulation.style.display = 'flex';
        btnNext.style.display = 'flex'
        btnAgain.style.display = 'none'
    }
    else{
        modalCongratulation.style.display = 'flex';
        modalCongratulationP.textContent = "Try it one more time ! ";
        modalCongratulationImg.src = "/images/icons/triste.gif ";
        btnNext.style.display = 'none';
        btnAgain.style.display = 'flex';
    }
})

/* Recargar la págin con el dom en los botones de quiz */
function reloadPage(){
    location.reload();
}

btnNext.addEventListener("click", reloadPage);
btnAgain.addEventListener("click", reloadPage);
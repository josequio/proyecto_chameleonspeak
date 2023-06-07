//-------------FORMA UNO---------------
/* let btnAccess = document.querySelector(".header_btn_access");
let modal = document.querySelector(".modal");
let btnModalCerrar = document.querySelector(".modal_close");


btnAccess.addEventListener("click",function(ev){
    ev.preventDefault();
   modal.style.display = "flex"

});

btnModalCerrar.addEventListener("click",function(ev){
    ev.preventDefault();
    modal.style.display = "none"
}); */

//FORMA DOS:
const openModal = document.querySelector(".modal_open");
const modal = document.querySelector(".modal");
const speakcardsModal = document.querySelector("#speakcards_modal");
const goModal = document.querySelector("#go_modal");
const closeModal = document.querySelector("#modal_close");

/*------- */
function showModal(ev){
    ev.preventDefault();
    modal.classList.add("modal--show");
};

function hideModal(ev){
    ev.preventDefault();
    modal.classList.remove("modal--show");
};
/*--------- */
closeModal.addEventListener("click", hideModal);

openModal.addEventListener("click",showModal);
speakcardsModal.addEventListener("click",showModal);
goModal.addEventListener("click",showModal);
/*------- */



/*------- */

/*------------------modal--idea-------------- */

const header_btn_idea = document.querySelector(".header_btn_idea");
const modal_idea = document.querySelector(".modal_idea");
const modal_close_idea = document.querySelector("#modal_close_idea")

function showModalidea(ev){
    ev.preventDefault();
    modal_idea.classList.add("modal--show");
};

function hideModalidea(ev){
    ev.preventDefault();
    modal_idea.classList.remove("modal--show");
};


header_btn_idea.addEventListener("click",showModalidea);
modal_close_idea.addEventListener("click", hideModalidea);
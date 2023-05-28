const cardPreviewer = document.querySelector(".card-previewer");
const cardTitle = document.querySelector(".card_title");
const cardTextP = document.querySelector("#card_text-p");
const cardImg = document.querySelector("#cardImg");


let inputTitleCard = document.querySelector("#titleCard");
let inputTextareaCard = document.querySelector("#textareaCard");
let inputImageCard = document.querySelector("#imageCard");
let inputColorCard = document.querySelector("#colorCard");
let inputWordsCard = document.querySelector("#wordsCard");

let inputTraductionWord = document.querySelector("#TraductionWord");


//-------------Evento para cargar img------------------------
inputImageCard.addEventListener('change', function(event) {
    handleImage(event);
  });

  function handleImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      /* const imagePreview = document.getElementById('image-preview'); */
      
      cardPreviewer.style.backgroundImage = `url(${event.target.result})`
      cardImg.src = event.target.result;
    };

    reader.readAsDataURL(file);
}


//Evento para elemento input - titulo del card

inputTitleCard.addEventListener('input', function (ev) {
    /* console.log(inputTitleCard.value); *///se imprime el valor ingesado.
    cardTitle.textContent = inputTitleCard.value;
});


inputTextareaCard.addEventListener('input', function (ev) {
    //console.log(inputTextareaCard.value); //se imprime el valor ingesado.
    cardTextP.textContent = inputTextareaCard.value;
    //onsole.log(cardTextP.innerHTML); 
    let contentText = cardTextP.innerHTML;
    inputWordsCard.addEventListener("input", function (ev) {
        let contentUpdated = contentText.replace(inputWordsCard.value,`<span id = "spanColor"> ${inputWordsCard.value} </span>`);
            cardTextP.innerHTML = contentUpdated;
    })

});

inputColorCard.addEventListener('input', function (ev) {
    let spanColor = document.querySelector("#spanColor");
    spanColor.style.color = inputColorCard.value;
});

inputTraductionWord.addEventListener('input',function(ev){
    let spanColor = document.querySelector("#spanColor");
    spanColor.setAttribute('title',inputTraductionWord.value);
});  


/* ---------------bton de reseteo----------- */

/* function resetearFormulario(){
  let formC = document.querySelector(".form");
  inputTitleCard.reset(); 
} */
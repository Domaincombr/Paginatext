const modelos = document.getElementById("modelosconteinars");

function esquerda(){
    modelos.scrollBy({
        left: -300,
        behavior: 'smooth' 
    });
}

function direita(){
    modelos.scrollBy({
        left: 300,
        behavior: 'smooth' 
    });
}

function whats() {
    window.location = "https://wa.me/5511942442175?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20páginas%20de%20vendas!";
}

function suporte(){
    window.location = "https://wa.me/5511942442175?text=Olá%20vin%20da%20pagina%20wen%20nexus%20e%20preciso%20de%20ajuda%20do%20suporte%20!";
}

const barraclllateral = document.getElementById("barraclllateral");
var onepy = 1;


function vem(){
    if(onepy % 2== 1){
        barraclllateral.classList.remove("barralateralcll");
        barraclllateral.classList.remove("barralateralclloff");
        barraclllateral.classList.add("barralateralcllon");
    }
    else{
        barraclllateral.classList.remove("barralateralcllon");
        barraclllateral.classList.add("barralateralclloff");
    }

    onepy++;
}


let valorbarra = document.querySelector(".valorbarra");
let barr = document.querySelector(".barr");

let valoratual = 0;
let valorafinal = 100;

let progress = setInterval(() => {
  valoratual++;
  valorbarra.textContent = `${valoratual}%`;
  barr.style.background = `conic-gradient(rgb(0, 228, 236) ${valoratual * 3.6}deg, rgb(0, 0, 28) 0deg)`;

  if (valoratual >= valorafinal) {
    valoratual = 0; 
  }
}, 100);

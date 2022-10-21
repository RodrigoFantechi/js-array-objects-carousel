/* Consegna:
Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1 (opzionale):
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2  (opzionale):
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3  (opzionale):
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
 */




const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const carousel = document.querySelector('.my_carousel');
const controls = document.querySelector('.controls');
const info = document.querySelector('.info_img');
const startStop = document.querySelector('.start');
const invert = document.querySelector('.invert');
let active = 0;
let variabileScorrimento = 0;
let reverse1;


images.forEach((element, index) => {
    const imageCarousel = `<img class="${(index === active) ? 'active' : ''} img_carousel" src="assets/${element.image}" alt="">`;
    const imageControls = `<img style=" height: calc(100%/${images.length});" class="${(index === active) ? 'grayscale' : ''} img_controls" src=assets/${element.image} alt="">`;
    const titleInfo = `<h2 class="${(index === active) ? 'active' : ''}">${element.title}</h2>
    <p class="${(index === active) ? 'active' : ''}">${element.text}</p>`;

    carousel.insertAdjacentHTML('beforeend', imageCarousel);
    controls.insertAdjacentHTML('beforeend', imageControls);
    info.insertAdjacentHTML('beforeend', titleInfo);
});



let scorrimento = setInterval(scorrimentoAvanti, 3000);

startStop.addEventListener('click', start);

invert.addEventListener('click', startInvert);

prevButton.addEventListener('click', scorrimentoAvanti);

nextButton.addEventListener('click', scorrimentoIndietro);




function scorrimentoIndietro() {
    variabileScorrimento = 0;
    const allImageCarousel = document.querySelectorAll('.img_carousel');
    const allImageControls = document.querySelectorAll('.img_controls');
    const allTitles = document.querySelectorAll('h2');
    const allParag = document.querySelectorAll('p');
    const elementActive = allImageCarousel[active];
    const elementActive2 = allImageControls[active];
    const title = allTitles[active];
    const Parag = allParag[active];
    title.classList.remove("active");
    Parag.classList.remove("active");
    elementActive.classList.remove("active");
    elementActive2.classList.remove("grayscale");
    if (active === 0) {
        active = (images.length - 1)
    } else {
        active--;
    }
    allImageCarousel[active].classList.add('active');
    allImageControls[active].classList.add('grayscale');
    allTitles[active].classList.add('active');
    allParag[active].classList.add('active');
}


function scorrimentoAvanti() {
    variabileScorrimento = 1;
    const allImageCarousel = document.querySelectorAll('.img_carousel');
    const allImageControls = document.querySelectorAll('.img_controls');
    const allTitles = document.querySelectorAll('h2');
    const allParag = document.querySelectorAll('p');
    const elementActive = allImageCarousel[active];
    const elementActive2 = allImageControls[active];
    const title = allTitles[active];
    const Parag = allParag[active];
    title.classList.remove("active");
    Parag.classList.remove("active");
    elementActive.classList.remove("active");
    elementActive2.classList.remove("grayscale");

    if (active === (images.length - 1)) {
        active = 0
    } else {
        active++;
    }
    allImageCarousel[active].classList.add('active');
    allImageControls[active].classList.add('grayscale');
    allTitles[active].classList.add('active');
    allParag[active].classList.add('active');
}

function start(){
    clearInterval(scorrimento);
    startStop.removeEventListener("click", start);
    startStop.addEventListener("click", stop);
    startStop.innerText= 'Start';
}

function stop(){
    clearInterval(scorrimento);
    startStop.removeEventListener("click", stop);
    startStop.addEventListener("click", start);
    if (variabileScorrimento === 0) {
        scorrimento = setInterval(scorrimentoIndietro, 3000);
    }else{
        scorrimento = setInterval(scorrimentoAvanti, 3000);
    }
    startStop.innerText= 'Stop';
}

function startInvert(){
    clearInterval(scorrimento);
    invert.removeEventListener("click", startInvert);
    invert.addEventListener("click", reverse);
    scorrimento = setInterval(scorrimentoIndietro,3000)
}

function reverse(){
    clearInterval(scorrimento);
    invert.removeEventListener("click", reverse);
    invert.addEventListener("click", startInvert);
    scorrimento = setInterval(scorrimentoAvanti, 3000);
}


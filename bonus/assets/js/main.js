const imgList = [
    "assets/img/01.webp",
    "assets/img/02.webp",
    "assets/img/03.webp",
    "assets/img/04.webp",
    "assets/img/05.webp"
];

const carousel = document.querySelector('.my_carousel');
const controls= document.querySelector('.controls');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let active = 0;

for (let i = 0; i < imgList.length; i++) {
    const listEl = imgList[i];
    const imageCarousel = `<img class="${(i === active) ? 'active' : ''} img_carousel" src=${listEl} alt="">`;
    const imageControls = `<img style=" height: calc(100%/${imgList.length});" class="${(i === active) ? 'grayscale' : ''} img_controls" src=${listEl} alt="">`;
    carousel.insertAdjacentHTML('beforeend', imageCarousel);
    controls.insertAdjacentHTML('beforeend', imageControls);
}

const allImageCarousel = document.querySelectorAll('.img_carousel');
const allImageControls = document.querySelectorAll('.img_controls');



prevButton.addEventListener('click', function () {


    const elementActive = allImageCarousel[active];
    const elementActive2 = allImageControls[active];
    elementActive.classList.remove("active");
    elementActive2.classList.remove("grayscale");
    
    if (active===(imgList.length-1)){
        active = 0
    }else{
        active++;  
    }
    allImageCarousel[active].classList.add('active');
    allImageControls[active].classList.add('grayscale');
    
    
});

nextButton.addEventListener('click', function () {
   
    
    const elementActive = allImageCarousel[active];
    const elementActive2 = allImageControls[active];
    elementActive.classList.remove("active");
    elementActive2.classList.remove("grayscale");
    if (active===0){
        active = (imgList.length-1)
    }else{
        active--;  
    }
    allImageCarousel[active].classList.add('active');
    allImageControls[active].classList.add('grayscale');
});
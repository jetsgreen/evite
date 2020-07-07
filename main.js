var toggle = document.querySelector('.toggle-button');
var navBar = document.getElementById('nav-bar');

toggle.addEventListener('click', function(){
    navBar.classList.toggle('active')
})

// Our Story JS
const items = document.querySelectorAll
('#timeline li');

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= 
        (window.innerHeight || document.documentElement.clientHeight) 
        && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const run = () => 
items.forEach(item => {
    if(isInViewport(item)){
        item.classList.add('show');
    }
});

// Events

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

// Photos Page JS
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

nextBtn.addEventListener('click', () =>{
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click', () =>{
    if(counter <= 0) return
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    };
});
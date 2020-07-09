var toggle = document.querySelector('.toggle-button');
var navBar = document.querySelector('.navbar-links');

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

// Wedding Countdown

function countDown(){
    var now = new Date();
    var eventDate = new Date(2020, 09, 04);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h /24);

    h%= 24;
    m%= 60;
    s%= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById('days').textContent = d;
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;

    setTimeout(countDown, 1000);
}

countDown();
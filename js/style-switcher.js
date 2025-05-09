/* ------  Toggle Style Switcher ------ */
const styleSwicherTogggle = document.querySelector(".style-swicher-toggler");
styleSwicherTogggle.addEventListener('click', () => {
    document.querySelector('.style-swicher').classList.toggle("open");
})

// Hide Style Switcher on scroll
window.addEventListener('scroll', () => {
    if(document.querySelector('.style-swicher').classList.contains("open")){
        document.querySelector('.style-swicher').classList.remove('open');
    }
})

/* ------  Theme Colors ------ */
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled');
        }
        else{
            style.setAttribute('disabled', 'true');
        }
    })
}

/* ------  Theme Light and Dark mode ------ */
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector("i").classList.toggle('fa-sun');
    dayNight.querySelector("i").classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark')){
        dayNight.querySelector("i").classList.add('fa-sun');
    }
    else{
        dayNight.querySelector("i").classList.add('fa-moon');
    }
})
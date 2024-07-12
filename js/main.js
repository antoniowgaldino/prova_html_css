/* --- Menu --- */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    }
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    }
}
/* --- Menu mobile --- */
const navLink = document.querySelectorAll('nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* --- Swiper --- */
const swiperHome = new Swiper('.home__swiper',{
    speed: 1200,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
            return `<span class="' + className + '">' + String(index + 1).padStart(2,'0')"</span>`;
        }
    }
});

/* --- GSAP ANIMATION --- */


/* ---  Efeito Blur  --- */
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)
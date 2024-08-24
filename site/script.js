// Fonction pour faire défiler la page vers le haut
const scrollToTopBtn = document.getElementById('scrollToTop');

function handleScroll() {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
document.addEventListener('scroll', handleScroll);

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Carrousel
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach((item, i) => {
        item.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function showPrevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    showSlide(currentIndex);
}

function showNextSlide() {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

// Initialisation du carrousel
showSlide(currentIndex);

// Fonction pour afficher et masquer le popup vidéo
const videoPopup = document.getElementById('videoPopup');
const closeButton = document.querySelector('.video-popup .close-button');

function openVideoPopup() {
    videoPopup.style.display = 'flex';
}

function closeVideoPopup() {
    videoPopup.style.display = 'none';
    const videoIframe = document.getElementById('videoIframe');
    // Réinitialiser la source de l'iframe pour arrêter la lecture de la vidéo
    videoIframe.src = "";
    // Réinitialiser la source de l'iframe pour relancer la vidéo (sans répétition)
    videoIframe.src = "https://www.youtube.com/embed/Iqr3XIhSnUQ?autoplay=1&controls=0";
}

closeButton.addEventListener('click', closeVideoPopup);

// Ouvrir automatiquement la vidéo lorsque la page se charge
window.onload = function() {
    openVideoPopup();
};

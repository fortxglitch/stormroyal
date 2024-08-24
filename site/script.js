// JavaScript pour afficher et masquer le popup vidéo
document.addEventListener('DOMContentLoaded', function() {
    var videoPopup = document.getElementById('videoPopup');
    var closeButton = document.querySelector('.close-button');
    var scrollToTopButton = document.getElementById('scrollToTop');

    // Afficher le popup vidéo
    window.onload = function() {
        videoPopup.style.display = 'flex'; // Afficher le popup
    };

    // Fermer le popup vidéo
    closeButton.addEventListener('click', function() {
        videoPopup.style.display = 'none'; // Masquer le popup
    });

    // Fermer le popup en cliquant en dehors de la vidéo
    videoPopup.addEventListener('click', function(event) {
        if (event.target === videoPopup) {
            videoPopup.style.display = 'none'; // Masquer le popup
        }
    });

    // Fonction pour faire défiler la page vers le haut
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

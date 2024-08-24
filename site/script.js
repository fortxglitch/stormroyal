document.addEventListener('DOMContentLoaded', function() {
    var videoPopup = document.getElementById('video-popup');
    var closeButton = document.querySelector('.close-button');

    // Afficher le popup lorsque la page se charge
    videoPopup.style.display = 'flex';

    // Fermer le popup lorsque l'utilisateur clique sur la croix
    closeButton.addEventListener('click', function() {
        videoPopup.style.display = 'none';
    });

    // Fermer le popup lorsque l'utilisateur clique en dehors du contenu
    videoPopup.addEventListener('click', function(event) {
        if (event.target === videoPopup) {
            videoPopup.style.display = 'none';
        }
    });
});

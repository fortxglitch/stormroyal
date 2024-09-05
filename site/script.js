// Variables pour activer/désactiver les pop-ups
const showServerProblemPopup = false; // Changez à false pour désactiver
const showServerClosedPopup = false;  // Changez à false pour désactiver
const showUpdatePopup = false;        // Changez à false pour désactiver

// Fonction pour afficher les pop-ups de statut
function showStatusPopup(type) {
    const popups = {
        serverProblem: document.getElementById('serverProblemPopup'),
        serverClosed: document.getElementById('serverClosedPopup'),
        update: document.getElementById('updatePopup')
    };

    // Masquer tous les pop-ups
    for (const key in popups) {
        if (popups.hasOwnProperty(key)) {
            popups[key].style.display = 'none';
        }
    }

    // Afficher le pop-up correspondant si activé
    if (popups[type] && eval(`show${type.charAt(0).toUpperCase() + type.slice(1)}Popup`)) {
        popups[type].style.display = 'block';
    }
}

// Exemple d'utilisation
if (showServerProblemPopup) {
    showStatusPopup('serverProblem');
}
if (showServerClosedPopup) {
    showStatusPopup('serverClosed');
}
if (showUpdatePopup) {
    showStatusPopup('update');
}

// Fonction pour masquer les pop-ups
document.querySelectorAll('.status-popup .close-button').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.status-popup').style.display = 'none';
    });
});

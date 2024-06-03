// popup.js
function showPopup(message, redirectUrl = null) {
    const popupMessage = document.getElementById('popup-message');
    popupMessage.textContent = message;
    document.getElementById('popup').style.display = 'block';

    if (redirectUrl) {
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 3000); // Espera 3 segundos antes de redirigir
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

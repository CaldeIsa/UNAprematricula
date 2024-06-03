import Database from './Database.js';

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const role = Database.validateUser(username, password);

    if (role) {
        if (role === 1) {
            window.location.href =  '/Home/MainAcademico';
        } else if (role === 2) {
                window.location.href = '/Home/MainEstudiante';
        }
    } else {
        // En cualquier archivo JavaScript donde desees mostrar el pop-up
        showPopup('Datos de ingreso incorrectos');

    }
});
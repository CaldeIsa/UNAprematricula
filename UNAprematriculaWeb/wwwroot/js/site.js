
document.addEventListener('DOMContentLoaded', (event) => {
    // Selecciona el botón por su ID
    const boton = document.getElementById('registerprem');

    // Añade un listener para el evento 'click' y asocia la función alHacerClic
    boton.addEventListener('click', alHacerClic);
});
function alHacerClic() {
    showPopup('Registro de prematricula exitoso. Redirigiendo...', '/Home/MainAcademico');

}
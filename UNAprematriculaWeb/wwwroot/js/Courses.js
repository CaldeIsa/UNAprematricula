import Database from './Database.js';

document.addEventListener('DOMContentLoaded', function () {

    const cycle = Database.getCycleData()

    console.log("Estoy aqui: ", cycle);
});

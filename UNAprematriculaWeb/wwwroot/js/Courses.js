import Database from './Database.js';

document.addEventListener('DOMContentLoaded', function () {

    const cycle = Database.getCycleData()

    const carousel = document.getElementById("carouselCourses");


    console.log(Object.keys(cycle));
    console.log(Object.keys(cycle).toString());
});

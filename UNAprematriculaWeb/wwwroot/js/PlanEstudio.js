import Database from './Database.js';

document.addEventListener('DOMContentLoaded', function () {

    const anosConCiclosYCursos = Database.getDT();
    const courses = Database.getCoursesData()

    const carousel = document.getElementById("accordionCourses");


    Object.keys(anosConCiclosYCursos).forEach((ano, anoIndex) => {
        const anoItem = document.createElement("div");
        anoItem.className = "accordion-item";

        const anoHeaderId = `flush-heading-ano${anoIndex}`;
        const anoCollapseId = `flush-collapse-ano${anoIndex}`;

        anoItem.innerHTML = `
                            <h4 class="accordion-header" id="${anoHeaderId}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${anoCollapseId}" aria-expanded="false" aria-controls="${anoCollapseId}">
                                    <strong>${ano}</strong>
                                </button>
                            </h4>
                            <div id="${anoCollapseId}" class="accordion-collapse collapse" aria-labelledby="${anoHeaderId}" data-bs-parent="#accordionFlushYears">
                                <div class="accordion accordion-flush" id="accordion${anoIndex}"></div>
                            </div>
                        `;

        carousel.appendChild(anoItem);

        const accordionAnoContainer = document.getElementById(`accordion${anoIndex}`);
        const ciclosConCursos = anosConCiclosYCursos[ano];

        Object.keys(ciclosConCursos).forEach((ciclo, cicloIndex) => {
            const cicloItem = document.createElement("div");
            cicloItem.className = "accordion-item";

            const cicloHeaderId = `flush-heading${anoIndex}-${cicloIndex}`;
            const cicloCollapseId = `flush-collapse${anoIndex}-${cicloIndex}`;

            cicloItem.innerHTML = `
                                <h5 class="accordion-header" id="${cicloHeaderId}">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${cicloCollapseId}" aria-expanded="false" aria-controls="${cicloCollapseId}">
                                        ${ciclo}
                                    </button>
                                </h5>
                                <div id="${cicloCollapseId}" class="accordion-collapse collapse" aria-labelledby="${cicloHeaderId}" data-bs-parent="#accordion${anoIndex}">
                                    <div class="accordion accordion-flush" id="accordionCursos${anoIndex}-${cicloIndex}"></div>
                                </div>
                            `;

            accordionAnoContainer.appendChild(cicloItem);

            const cursoContainer = document.getElementById(`accordionCursos${anoIndex}-${cicloIndex}`);
            const cursos = ciclosConCursos[ciclo]; // Obtener cursos específicos para el ciclo actual

            cursos.forEach((curso, cursoIndex) => {
                const cursoData = courses.find(c => c.name.toUpperCase() === curso.toUpperCase());

                const cursoItem = document.createElement("div");
                cursoItem.className = "accordion-item";

                const cursoHeaderId = `flush-heading${anoIndex}-${cicloIndex}-${cursoIndex}`;
                const cursoCollapseId = `flush-collapse${anoIndex}-${cicloIndex}-${cursoIndex}`;

                if (cursoData) {
                    cursoItem.innerHTML = `
                                        <h6 class="accordion-header" id="${cursoHeaderId}">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${cursoCollapseId}" aria-expanded="false" aria-controls="${cursoCollapseId}">
                                                ${cursoData.name.toUpperCase()} <!-- Convertir a mayúsculas -->
                                            </button>
                                        </h6>
                                        <div id="${cursoCollapseId}" class="accordion-collapse collapse" aria-labelledby="${cursoHeaderId}" data-bs-parent="#accordionCursos${anoIndex}-${cicloIndex}">
                                            <div class="accordion-body">
                                                <div class="datosP">
                                                    <p><strong>NRC:</strong> ${cursoData.nrc}</p>
                                                    <p><strong>Créditos:</strong> ${cursoData.credits}</p>
                                                    <p><strong>Descripción:</strong> ${cursoData.description}</p>
                                                    <p><strong>Requisitos:</strong> ${Array.isArray(cursoData.prerequisites) ? cursoData.prerequisites.join(', ') : cursoData.prerequisites}</p>
                                                </div>
                                            </div>
                                        </div>
                    `;
                } else {
                    cursoItem.innerHTML = `
                                        <h6 class="accordion-header" id="${cursoHeaderId}">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${cursoCollapseId}" aria-expanded="false" aria-controls="${cursoCollapseId}">
                                                ${curso.toUpperCase()} <!-- Convertir a mayúsculas -->
                                            </button>
                                        </h6>
                                        <div id="${cursoCollapseId}" class="accordion-collapse collapse" aria-labelledby="${cursoHeaderId}" data-bs-parent="#accordionCursos${anoIndex}-${cicloIndex}">
                                            <div class="accordion-body">
                                                <div class="datosP">
                                                    <p><strong>Información del curso no encontrada</strong></p>
                                                </div>
                                            </div>
                                        </div>
                    `;
                }

                cursoContainer.appendChild(cursoItem);
            });
        });
    });
});

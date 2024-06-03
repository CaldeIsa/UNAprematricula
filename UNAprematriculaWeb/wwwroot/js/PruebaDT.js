import Database from './Database.js';

document.getElementById('prematriculaForm').addEventListener('submit', function (event) {
    event.preventDefault();
    showPopup('Prematricula exitosa. Redirigiendo...', '/Home/MainEstudiante2');
});

document.addEventListener("DOMContentLoaded", function () {
    showPopup('La prematricula se puede realizar unicamente una vez');

    // Definir años, ciclos y sus respectivos cursos
    const anosConCiclosYCursos = Database.getDT();
    const accordionContainer = document.getElementById("accordionFlushYears");

    const cursosExcluidos = ["Optativa", "Generales", "Inglés"];

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

        accordionContainer.appendChild(anoItem);

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
                // Filtrar los cursos excluidos
                if (cursosExcluidos.some(excluido => curso.toLowerCase().includes(excluido.toLowerCase()))) {
                    return;
                }

                const cursoItem = document.createElement("div");
                cursoItem.className = "accordion-item";

                const cursoHeaderId = `flush-heading${anoIndex}-${cicloIndex}-${cursoIndex}`;
                const cursoCollapseId = `flush-collapse${anoIndex}-${cicloIndex}-${cursoIndex}`;

                cursoItem.innerHTML = `
                    <h6 class="accordion-header" id="${cursoHeaderId}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${cursoCollapseId}" aria-expanded="false" aria-controls="${cursoCollapseId}">
                            ${curso.toUpperCase()} <!-- Convertir a mayúsculas -->
                        </button>
                    </h6>
                    <div id="${cursoCollapseId}" class="accordion-collapse collapse" aria-labelledby="${cursoHeaderId}" data-bs-parent="#accordionCursos${anoIndex}-${cicloIndex}">
                        <div class="accordion-body">
                            <div class="datosP">
                                <p>Prematricular</p>
                                <input type="checkbox" class="checkCurso" style="box-shadow: none !important;">
                                <p>Estado del curso</p>
                                <select id="estadoCurso">
                                    <option selected>Seleccione</option>
                                    <option value="PrimeraVez">Primera vez</option>
                                    <option value="Matriculado">Matriculado</option>
                                    <option value="Repitencia">Repitencia</option>
                                </select>
                                <p>Cantidad de veces que ha llevado el curso</p>
                                <select>
                                    <option selected>Seleccione</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <label>Ha asistido a tutorías</label>
                                <select>
                                    <option selected>Seleccione</option>
                                    <option value="Si">Sí</option>
                                    <option value="No">No</option>
                                </select>
                                <label>Cuál es el horario de su preferencia</label>
                                <select>
                                    <option selected>Seleccione</option>
                                    <option value="1">Mañana</option>
                                    <option value="2">Tarde</option>
                                    <option value="3">Noche</option>
                                </select>
                            </div>
                        </div>
                    </div>
                `;

                cursoContainer.appendChild(cursoItem);
            });
        });
    });
});

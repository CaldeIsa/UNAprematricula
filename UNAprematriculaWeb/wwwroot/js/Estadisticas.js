import Database from './Database.js';

document.addEventListener("DOMContentLoaded", function () {

    const anosConCiclosYCursos = Database.getDT();
    const accordionContainer = document.getElementById("accordionEstadisticas");
    const cicloSeleccionado = window.cicloSeleccionado;
    const anoSeleccionado = window.anoSeleccionado;


    const cursosExcluidos = ["Optativa", "Generales", "Inglés"];

    Object.keys(anosConCiclosYCursos).forEach((ano, anoIndex) => {
        const anoItem = document.createElement("div");
        anoItem.className = "accordion-item";

        const anoHeaderId = `flush-heading-ano${anoIndex}`;
        const anoCollapseId = `flush-collapse-ano${anoIndex}`;

        anoItem.innerHTML = `
            <h4 class="accordion-header" id="${anoHeaderId}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${anoCollapseId}" aria-expanded="false" aria-controls="${anoCollapseId}">
                    <strong>${ano} - ${cicloSeleccionado} CICLO</strong>
                </button>
            </h4>
            <div id="${anoCollapseId}" class="accordion-collapse collapse" aria-labelledby="${anoHeaderId}" data-bs-parent="#accordionEstadisticas">
                <div class="accordion-body">
                    <div class="accordion accordion-flush" id="accordionAno${anoIndex}"></div>
                </div>
            </div>
        `;

        accordionContainer.appendChild(anoItem);

        const accordionAnoContainer = document.getElementById(`accordionAno${anoIndex}`);
        const ciclosConCursos = anosConCiclosYCursos[ano];
        const cursos = ciclosConCursos[`${cicloSeleccionado} CICLO`];

        if (cursos) {
            cursos.forEach((curso, cursoIndex) => {
                // Filtrar los cursos excluidos
                if (cursosExcluidos.some(excluido => curso.toLowerCase().includes(excluido.toLowerCase()))) {
                    return;
                }

                const cursoItem = document.createElement("div");
                cursoItem.className = "accordion-item";

                const cursoHeaderId = `flush-heading-curso${anoIndex}-${cursoIndex}`;
                const cursoCollapseId = `flush-collapse-curso${anoIndex}-${cursoIndex}`;

                cursoItem.innerHTML = `
                    <h5 class="accordion-header" id="${cursoHeaderId}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${cursoCollapseId}" aria-expanded="false" aria-controls="${cursoCollapseId}">
                            ${curso}
                        </button>
                    </h5>
                    <div id="${cursoCollapseId}" class="accordion-collapse collapse" aria-labelledby="${cursoHeaderId}" data-bs-parent="#accordionAno${anoIndex}">
                        <div class="accordion-body">
                            <div class="accordion accordion-flush" id="accordionCurso${anoIndex}-${cursoIndex}"></div>
                        </div>
                    </div>
                `;

                accordionAnoContainer.appendChild(cursoItem);

                const accordionCursoContainer = document.getElementById(`accordionCurso${anoIndex}-${cursoIndex}`);
                const preguntasEstadisticas = [
                    { pregunta: "Estado del curso", datos: [60, 20, 20], labels: ["Primera vez", "Matriculado", "Repitencia"] },
                    { pregunta: "Cantidad de veces que ha llevado el curso", datos: [10, 30, 40, 20], labels: ["0", "1", "2", "3 o más"] },
                    { pregunta: "Asistencia a tutorías", datos: [70, 30], labels: ["Sí", "No"] },
                    { pregunta: "Horario de preferencia", datos: [40, 30, 30], labels: ["Mañana", "Tarde", "Noche"] }
                ];

                preguntasEstadisticas.forEach((pregunta, preguntaIndex) => {
                    const preguntaItem = document.createElement("div");
                    preguntaItem.className = "accordion-item";

                    const preguntaHeaderId = `flush-heading-pregunta${anoIndex}-${cursoIndex}-${preguntaIndex}`;
                    const preguntaCollapseId = `flush-collapse-pregunta${anoIndex}-${cursoIndex}-${preguntaIndex}`;

                    preguntaItem.innerHTML = `
                        <h6 class="accordion-header" id="${preguntaHeaderId}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${preguntaCollapseId}" aria-expanded="false" aria-controls="${preguntaCollapseId}">
                                ${pregunta.pregunta}
                            </button>
                        </h6>
                        <div id="${preguntaCollapseId}" class="accordion-collapse collapse" aria-labelledby="${preguntaHeaderId}" data-bs-parent="#accordionCurso${anoIndex}-${cursoIndex}">
                            <div class="accordion-body">
                                <canvas id="graficoPregunta${anoIndex}-${cursoIndex}-${preguntaIndex}"></canvas>
                            </div>
                        </div>
                    `;

                    accordionCursoContainer.appendChild(preguntaItem);

                    new Chart(document.getElementById(`graficoPregunta${anoIndex}-${cursoIndex}-${preguntaIndex}`).getContext('2d'), {
                        type: 'pie',
                        data: {
                            labels: pregunta.labels,
                            datasets: [{
                                data: pregunta.datos,
                                backgroundColor: ['rgba(166, 19, 24, 1)', 'rgba(255, 81, 87, 1)', 'rgba(190, 0, 65, 1)', 'rgba(74, 23, 25, 1)'],
                                borderColor: ['white'],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            plugins: {
                                legend: {
                                    labels: {
                                        font: { size: 14, weight: 'bold' },
                                        color: 'black'
                                    }
                                }
                            }
                        }
                    });
                });
            });
        }
    });
});

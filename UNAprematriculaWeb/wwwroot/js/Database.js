class Database {
    constructor() {
        this.users = [
            { username: '1', password: '1', role: 1 },
            { username: '2', password: '2', role: 2 }
        ];

        this.anosConCiclosYCursos = {
            "PRIMER AÑO": {
                "I CICLO": ["FUNDAMENTOS DE LA INFORMATICA", "MATEMATICA PARA INFORMATICA", "ESTUDIOS GENERALES I", "ESTUDIOS GENERALES II"],
                "II CICLO": ["PROGRAMACIÓN I", "INGLÉS INTEGRADO II", "CÁLCULO I", "ESTUDIOS GENERALES III", "ESTUDIOS GENERALES IV"]
            },
            "SEGUNDO AÑO": {
                "I CICLO": ["SOPORTE TECNICO", "PROGRAMACION II", "ALGEBRA LINEAL", "ESTRUCTURAS DISCRETAS", "INGLÉS INTEGRADO II"],
                "II CICLO": ["ARQUITECTURA DE COMPUTADORAS", "PROGRAMACIÓN III", "ESTRUCTURAS DE DATOS", "LA ORGANIZACIÓN Y SU ENTORNO", "PROBABILIDAD Y ESTADÍSTICA"]
            },
            "TERCER AÑO": {
                "I CICLO": ["COMUNICACIONES Y REDES DE COMPUTADORES", "PROGRAMACIÓN VI", "INGENIERÍA DE SISTEMAS I", "DISEÑO E IMPLEMENTACIÓN DE BASE DE DATOS", "SISTEMAS OPERATIVOS"],
                "II CICLO": ["PARADIGMAS DE PROGRAMACIÓN", "INGENIERÍA DE SISTEMAS II", "ADMINISTRACIÓN DE BASES DE DATOS", "LIDERAZGO Y ORGANIZACIÓN", "INVESTIGACIÓN DE OPERACIONES Y SUS APLICACIONES"]
            },
            "CUARTO AÑO": {
                "I CICLO": ["INGENIERÍA DE SISTEMAS III", "DISEÑO Y PROGRAMACIÓN DE MOVILES", "MÉTODOS DE INVESTIGACIÓN", "OPTATIVA", "OPTATIVA"],
                "II CICLO": ["PPS", "APLICACIONES INFORMÁTICAS GLOBALES", "INFORMÁTICA Y SOCIEDAD", "OPTATIVA", "OPTATIVA"]
            }
        };

        this.courses = [
            // Primer año
            { id: 1, name: 'FUNDAMENTOS DE LA INFORMATICA', nrc: 'EIF200', credits: 3, description: 'Introducción a la lógica, desarrollo de lenguaje técnico y manejo de aplicaciones', status: 'Aprobado', prerequisites: 'Ingreso a la carrera' },
            { id: 2, name: 'MATEMATICA PARA INFORMATICA', nrc: 'MAT030', credits: 4, description: 'Introducción a la matematica lógica y funcional', status: 'Aprobado', prerequisites: [] },
            { id: 3, name: 'ESTUDIOS GENERALES I', nrc: '1', credits: 3, description: 'Humanismo', status: 'Aprobado', prerequisites: [] },
            { id: 4, name: 'ESTUDIOS GENERALES II', nrc: '2', credits: 3, description: 'Humanismo', status: 'Aprobado', prerequisites: [] },
            { id: 5, name: 'INGLÉS INTEGRADO I', nrc: 'LIX410', credits: 4, description: 'Introducción repaso al idioma de inglés', status: 'Aprobado', prerequisites: [] },

            { id: 6, name: 'PROGRAMACIÓN I', nrc: 'EIF201', credits: 4, description: 'Continuación con la lógica en programación orientado a objetos en c++', status: 'Aprobado', prerequisites: ['FUNDAMENTOS DE LA INFORMATICA', 'MATEMATICA PARA INFORMATICA'] },
            { id: 7, name: 'INGLÉS INTEGRADO II', nrc: 'LIX411', credits: 4, description: 'Siguiente nivel del idioma con temas más avanzados', status: 'Aprobado', prerequisites: ['INGLÉS INTEGRADO I'] },
            { id: 8, name: 'CÁLCULO I', nrc: 'MAT002', credits: 4, description: 'Nivel de matemática superior', status: 'Aprobado', prerequisites: ['MATEMATICA PARA INFORMATICA'] },
            { id: 9, name: 'ESTUDIOS GENERALES III', nrc: '3', credits: 3, description: 'Humanismo', status: 'Aprobado', prerequisites: [] },
            { id: 10, name: 'ESTUDIOS GENERALES IV', nrc: '4', credits: 3, description: 'Humanismo', status: 'Aprobado', prerequisites: [] },

            // Segundo año
            { id: 11, name: 'SOPORTE TECNICO', nrc: 'EIF202', credits: 3, description: 'Fundamentos de hardware y electrónica', status: 'Matriculado', prerequisites: ['FUNDAMENTOS DE LA INFORMATICA'] },
            { id: 12, name: 'PROGRAMACION II', nrc: 'EIF204', credits: 4, description: 'Modelo y arquitectura en la programación orientado a objetos en c++', status: 'Matriculado', prerequisites: ['PROGRAMACIÓN I'] },
            { id: 13, name: 'ALGEBRA LINEAL', nrc: 'MAT005', credits: 4, description: 'Nivel de matemática relacionado al álgebra', status: 'Matriculado', prerequisites: ['CÁLCULO I'] },
            { id: 14, name: 'ESTRUCTURAS DISCRETAS', nrc: 'EIF203', credits: 3, description: 'Matemáticas con un enfoque discreto a la estructura en programación', status: 'Matriculado', prerequisites: ['FUNDAMENTOS DE LA INFORMATICA', 'MATEMATICA PARA INFORMATICA'] },
            { id: 15, name: 'INGLÉS INTEGRADO III', nrc: 'LIX412', credits: 4, description: 'Enfoque al nivel más avanzado', status: 'Matriculado', prerequisites: ['INGLÉS INTEGRADO II'] },

            { id: 16, name: 'ARQUITECTURA DE COMPUTADORAS', nrc: 'EIF205', credits: 3, description: 'Relacionado en la parte lógica de los componentes', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN I', 'SOPORTE TECNICO'] },
            { id: 17, name: 'PROGRAMACIÓN III', nrc: 'EIF206', credits: 4, description: 'Programación orientado a Java, Swing y Base de datos', status: 'Pendiente', prerequisites: ['PROGRAMACION II', 'CÁLCULO I'] },
            { id: 18, name: 'ESTRUCTURAS DE DATOS', nrc: 'EIF207', credits: 4, description: 'Programación Orientado al manejo a la arquitectura estructurada', status: 'Pendiente', prerequisites: ['ESTRUCTURAS DISCRETAS', 'PROGRAMACION II'] },
            { id: 19, name: 'LA ORGANIZACIÓN Y SU ENTORNO', nrc: 'EIF404', credits: 3, description: 'Introducción a la organización de la empresa', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN I'] },
            { id: 20, name: 'PROBABILIDAD Y ESTADÍSTICA', nrc: 'MAT006', credits: 3, description: 'Matemática orientado a la probabilidad y estadística', status: 'Pendiente', prerequisites: ['CÁLCULO I', 'ESTRUCTURAS DISCRETAS'] },

            // Tercer año
            { id: 21, name: 'COMUNICACIONES Y REDES DE COMPUTADORES', nrc: 'EIF208', credits: 3, description: 'Curso de redes informáticas', status: 'Pendiente', prerequisites: ['ARQUITECTURA DE COMPUTADORAS'] },
            { id: 22, name: 'PROGRAMACIÓN VI', nrc: 'EIF209', credits: 4, description: 'Programacion en Java', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN III'] },
            { id: 23, name: 'INGENIERÍA DE SISTEMAS I', nrc: 'EIF210', credits: 4, description: 'Curso en una organizacion', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN III'] },
            { id: 24, name: 'DISEÑO E IMPLEMENTACIÓN DE BASE DE DATOS', nrc: 'EIF211', credits: 3, description: 'Curso de bases de datos', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN III', 'ESTRUCTURAS DE DATOS'] },
            { id: 25, name: 'SISTEMAS OPERATIVOS', nrc: 'EIF212', credits: 3, description: 'Curso de sistemas operativos en Linux', status: 'Pendiente', prerequisites: ['ARQUITECTURA DE COMPUTADORAS', 'PROGRAMACION II'] },

            { id: 26, name: 'PARADIGMAS DE PROGRAMACIÓN', nrc: 'EIF400', credits: 4, description: 'Se aprenderá sobre los diferentes paradigmas de programación', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN III'] },
            { id: 27, name: 'INGENIERÍA DE SISTEMAS II', nrc: 'EIF401', credits: 4, description: 'Continuación de curso en una organización', status: 'Pendiente', prerequisites: ['INGENIERÍA DE SISTEMAS I'] },
            { id: 28, name: 'ADMINISTRACIÓN DE BASES DE DATOS', nrc: 'EIF402', credits: 4, description: 'Creación de respaldos de bases de datos', status: 'Pendiente', prerequisites: ['DISEÑO E IMPLEMENTACIÓN DE BASE DE DATOS', 'SISTEMAS OPERATIVOS'] },
            { id: 29, name: 'LIDERAZGO Y ORGANIZACIÓN', nrc: 'EIF407', credits: 3, description: 'Curso para aprender a ser un líder en una organización', status: 'Pendiente', prerequisites: ['LA ORGANIZACIÓN Y SU ENTORNO'] },
            { id: 30, name: 'INVESTIGACIÓN DE OPERACIONES Y SUS APLICACIONES', nrc: 'EIF412', credits: 3, description: 'Curso para aprender de operaciones utilizando programación', status: 'Pendiente', prerequisites: ['ALGEBRA LINEAL', 'PROBABILIDAD Y ESTADÍSTICA'] },

            // Cuarto año
            { id: 31, name: 'INGENIERÍA DE SISTEMAS III', nrc: 'EIF406', credits: 4, description: 'Último curso realizado en una organización', status: 'Pendiente', prerequisites: ['INGENIERÍA DE SISTEMAS II'] },
            { id: 32, name: 'DISEÑO Y PROGRAMACIÓN DE MOVILES', nrc: 'EIF411', credits: 4, description: 'Creación de aplicaciones móviles', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN VI'] },
            { id: 33, name: 'MÉTODOS DE INVESTIGACIÓN', nrc: 'EIF413', credits: 3, description: 'Aprendizaje para crear artículos científicos', status: 'Pendiente', prerequisites: ['PROBABILIDAD Y ESTADÍSTICA'] },
            { id: 34, name: 'OPTATIVA', nrc: '5', credits: 3, description: 'Curso disciplinario', status: 'Pendiente', prerequisites: [] },
            { id: 35, name: 'OPTATIVA', nrc: '6', credits: 3, description: 'Curso disciplinario', status: 'Pendiente', prerequisites: [] },

            { id: 36, name: 'PPS', nrc: 'EIF408', credits: 5, description: 'Práctica profesional supervisada', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN VI', 'INGENIERÍA DE SISTEMAS II', 'ADMINISTRACIÓN DE BASES DE DATOS'] },
            { id: 37, name: 'APLICACIONES INFORMÁTICAS GLOBALES', nrc: 'EIF409', credits: 4, description: 'Creación de una aplicación móvil para una organización', prerequisites: ['PROGRAMACIÓN VI', 'INGENIERÍA DE SISTEMAS II', 'ADMINISTRACIÓN DE BASES DE DATOS'] },
            { id: 38, name: 'INFORMÁTICA Y SOCIEDAD', nrc: 'EIF410', credits: 2, description: 'Curso para aprender de tecnología con relación a la sociedad', prerequisites: ['INGENIERÍA DE SISTEMAS II'] },
            { id: 39, name: 'OPTATIVA', nrc: '7', credits: 3, description: 'Curso disciplinario', status: 'Pendiente', prerequisites: [] },
            { id: 40, name: 'OPTATIVA', nrc: '8', credits: 3, description: 'Curso disciplinario', status: 'Pendiente', prerequisites: [] }
        ];

        this.cycles = [{
            "PRIMER AÑO": {
                "I CICLO": [
                    {
                        "id": "1",
                        "name": "FUNDAMENTOS DE LA INFORMATICA",
                        "nrc": "EIF200",
                        "credits": 3,
                        "description": "Introducción a la lógica, desarrollo de lenguaje técnico y manejo de aplicaciones",
                        "prerequisites": "Ingreso a la carrera"
                    },
                    {
                        "id": "2",
                        "name": "MATEMATICA PARA INFORMATICA",
                        "nrc": "MAT030",
                        "credits": 4,
                        "description": "Introducción a la matematica lógica y funcional",
                        "prerequisites": []
                    },
                    {
                        "id": "3",
                        "name": "ESTUDIOS GENERALES I",
                        "nrc": "1",
                        "credits": 3,
                        "description": "Humanismo",
                        "prerequisites": []
                    },
                    {
                        "id": "4",
                        "name": "ESTUDIOS GENERALES II",
                        "nrc": "2",
                        "credits": 3,
                        "description": "Humanismo",
                        "prerequisites": []
                    },
                    {
                        "id": "5",
                        "name": "INGLÉS INTEGRADO I",
                        "nrc": "LIX410",
                        "credits": 4,
                        "description": "Introducción repaso al idioma de inglés",
                        "prerequisites": []
                    }
                ],
                "II CICLO": [
                    {
                        "id": "6",
                        "name": "PROGRAMACIÓN I",
                        "nrc": "EIF201",
                        "credits": 4,
                        "description": "Continuación con la lógica en programación orientado a objetos en c++",
                        "prerequisites": ["FUNDAMENTOS DE LA INFORMATICA", "MATEMATICA PARA INFORMATICA"]
                    },
                    {
                        "id": "7",
                        "name": "INGLÉS INTEGRADO II",
                        "nrc": "LIX411",
                        "credits": 4,
                        "description": "Siguiente nivel del idioma con temas más avanzados",
                        "prerequisites": ["INGLÉS INTEGRADO I"]
                    },
                    {
                        "id": "8",
                        "name": "CÁLCULO I",
                        "nrc": "MAT002",
                        "credits": 4,
                        "description": "Nivel de matemática superior",
                        "prerequisites": ["MATEMATICA PARA INFORMATICA"]
                    },
                    {
                        "id": "9",
                        "name": "ESTUDIOS GENERALES III",
                        "nrc": "3",
                        "credits": 3,
                        "description": "Humanismo",
                        "prerequisites": []
                    },
                    {
                        "id": "10",
                        "name": "ESTUDIOS GENERALES IV",
                        "nrc": "4",
                        "credits": 3,
                        "description": "Humanismo",
                        "prerequisites": []
                    }
                ]
            },
            "SEGUNDO AÑO": {
                "I CICLO": [
                    {
                        "id": "11",
                        "name": "SOPORTE TECNICO",
                        "nrc": "EIF202",
                        "credits": 3,
                        "description": "Fundamentos de hardware y electrónica",
                        "prerequisites": ["FUNDAMENTOS DE LA INFORMATICA"]
                    },
                    {
                        "id": "12",
                        "name": "PROGRAMACION II",
                        "nrc": "EIF204",
                        "credits": 4,
                        "description": "Modelo y arquitectura en la programación orientado a objetos en c++",
                        "prerequisites": ["PROGRAMACIÓN I"]
                    },
                    {
                        "id": "13",
                        "name": "ALGEBRA LINEAL",
                        "nrc": "MAT005",
                        "credits": 4,
                        "description": "Nivel de matemática relacionado al álgebra",
                        "prerequisites": ["CÁLCULO I"]
                    },
                    {
                        "id": "14",
                        "name": "ESTRUCTURAS DISCRETAS",
                        "nrc": "EIF203",
                        "credits": 3,
                        "description": "Matemáticas con un enfoque discreto a la estructura en programación",
                        "prerequisites": ["FUNDAMENTOS DE LA INFORMATICA", "MATEMATICA PARA INFORMATICA"]
                    },
                    {
                        "id": "15",
                        "name": "INGLÉS INTEGRADO III",
                        "nrc": "LIX412",
                        "credits": 4,
                        "description": "Enfoque al nivel más avanzado",
                        "prerequisites": ["INGLÉS INTEGRADO II"]
                    }
                ],
                "II CICLO": [
                    {
                        "id": "16",
                        "name": "ARQUITECTURA DE COMPUTADORAS",
                        "nrc": "EIF205",
                        "credits": 3,
                        "description": "Relacionado en la parte lógica de los componentes",
                        "prerequisites": ["PROGRAMACIÓN I", "SOPORTE TECNICO"]
                    },
                    {
                        "id": "17",
                        "name": "PROGRAMACIÓN III",
                        "nrc": "EIF206",
                        "credits": 4,
                        "description": "Programación orientado a Java, Swing y Base de datos",
                        "prerequisites": ["PROGRAMACION II", "CÁLCULO I"]
                    },
                    {
                        "id": "18",
                        "name": "ESTRUCTURAS DE DATOS",
                        "nrc": "EIF207",
                        "credits": 4,
                        "description": "Programación Orientado al manejo a la arquitectura estructurada",
                        "prerequisites": ["ESTRUCTURAS DISCRETAS", "PROGRAMACION II"]
                    },
                    {
                        "id": "19",
                        "name": "LA ORGANIZACIÓN Y SU ENTORNO",
                        "nrc": "EIF404",
                        "credits": 3,
                        "description": "Introducción a la organización de la empresa",
                        "prerequisites": ["PROGRAMACIÓN I"]
                    },
                    {
                        "id": "20",
                        "name": "PROBABILIDAD Y ESTADÍSTICA",
                        "nrc": "MAT006",
                        "credits": 3,
                        "description": "Matemática orientado a la probabilidad y estadística",
                        "prerequisites": ["CÁLCULO I", "ESTRUCTURAS DISCRETAS"]
                    }
                ]
            },
            "TERCER AÑO": {
                "I CICLO": [
                    {
                        "id": "21",
                        "name": "COMUNICACIONES Y REDES DE COMPUTADORES",
                        "nrc": "EIF208",
                        "credits": 3,
                        "description": "Curso de redes informáticas",
                        "prerequisites": ["ARQUITECTURA DE COMPUTADORAS"]
                    },
                    {
                        "id": "22",
                        "name": "PROGRAMACIÓN VI",
                        "nrc": "EIF209",
                        "credits": 4,
                        "description": "Programacion en Java",
                        "prerequisites": ["PROGRAMACIÓN III"]
                    },
                    {
                        "id": "23",
                        "name": "INGENIERÍA DE SISTEMAS I",
                        "nrc": "EIF210",
                        "credits": 4,
                        "description": "Curso en una organizacion",
                        "prerequisites": ["PROGRAMACIÓN III"]
                    },
                    {
                        "id": "24",
                        "name": "DISEÑO E IMPLEMENTACIÓN DE BASE DE DATOS",
                        "nrc": "EIF211",
                        "credits": 3,
                        "description": "Curso de bases de datos",
                        "prerequisites": ["PROGRAMACIÓN III", "ESTRUCTURAS DE DATOS"]
                    },
                    {
                        "id": "25",
                        "name": "SISTEMAS OPERATIVOS",
                        "nrc": "EIF212",
                        "credits": 3,
                        "description": "Curso de sistemas operativos en Linux",
                        "prerequisites": ["ARQUITECTURA DE COMPUTADORAS", "PROGRAMACION II"]
                    }
                ],
                "II CICLO": [
                    {
                        "id": "26",
                        "name": "PARADIGMAS DE PROGRAMACIÓN",
                        "nrc": "EIF400",
                        "credits": 4,
                        "description": "Se aprenderá sobre los diferentes paradigmas de programación",
                        "prerequisites": ["PROGRAMACIÓN III"]
                    },
                    {
                        "id": "27",
                        "name": "INGENIERÍA DE SISTEMAS II",
                        "nrc": "EIF401",
                        "credits": 4,
                        "description": "Continuación de curso en una organización",
                        "prerequisites": ["INGENIERÍA DE SISTEMAS I"]
                    },
                    {
                        "id": "28",
                        "name": "ADMINISTRACIÓN DE BASES DE DATOS",
                        "nrc": "EIF402",
                        "credits": 4,
                        "description": "Creación de respaldos de bases de datos",
                        "prerequisites": ["DISEÑO E IMPLEMENTACIÓN DE BASE DE DATOS", "SISTEMAS OPERATIVOS"]
                    },
                    {
                        "id": "29",
                        "name": "LIDERAZGO Y ORGANIZACIÓN",
                        "nrc": "EIF407",
                        "credits": 3,
                        "description": "Curso para aprender a ser un líder en una organización",
                        "prerequisites": ["LA ORGANIZACIÓN Y SU ENTORNO"]
                    },
                    {
                        "id": "30",
                        "name": "INVESTIGACIÓN DE OPERACIONES Y SUS APLICACIONES",
                        "nrc": "EIF412",
                        "credits": 3,
                        "description": "Curso para aprender de operaciones utilizando programación",
                        "prerequisites": ["ALGEBRA LINEAL", "PROBABILIDAD Y ESTADÍSTICA"]
                    }
                ]
            },
            "CUARTO AÑO": {
                "I CICLO": [
                    {
                        "id": "31",
                        "name": "INGENIERÍA DE SISTEMAS III",
                        "nrc": "EIF406",
                        "credits": 4,
                        "description": "Último curso realizado en una organización",
                        "prerequisites": ["INGENIERÍA DE SISTEMAS II"]
                    },
                    {
                        "id": "32",
                        "name": "DISEÑO Y PROGRAMACIÓN DE MOVILES",
                        "nrc": "EIF411",
                        "credits": 4,
                        "description": "Creación de aplicaciones móviles",
                        "prerequisites": ["PROGRAMACIÓN VI"]
                    },
                    {
                        "id": "33",
                        "name": "MÉTODOS DE INVESTIGACIÓN",
                        "nrc": "EIF413",
                        "credits": 3,
                        "description": "Aprendizaje para crear artículos científicos",
                        "prerequisites": ["PROBABILIDAD Y ESTADÍSTICA"]
                    },
                    {
                        "id": "34",
                        "name": "OPTATIVA",
                        "nrc": "5",
                        "credits": 3,
                        "description": "Curso disciplinario",
                        "prerequisites": []
                    },
                    {
                        "id": "35",
                        "name": "OPTATIVA",
                        "nrc": "6",
                        "credits": 3,
                        "description": "Curso disciplinario",
                        "prerequisites": []
                    }
                ],
                "II CICLO": [
                    {
                        "id": "36",
                        "name": "PPS",
                        "nrc": "EIF408",
                        "credits": 5,
                        "description": "Práctica profesional supervisada",
                        "prerequisites": ["PROGRAMACIÓN VI", "INGENIERÍA DE SISTEMAS II", "ADMINISTRACIÓN DE BASES DE DATOS"]
                    },
                    {
                        "id": "37",
                        "name": "APLICACIONES INFORMÁTICAS GLOBALES",
                        "nrc": "EIF409",
                        "credits": 4,
                        "description": "Creación de una aplicación móvil para una organización",
                        "prerequisites": ["PROGRAMACIÓN VI", "INGENIERÍA DE SISTEMAS II", "ADMINISTRACIÓN DE BASES DE DATOS"]
                    },
                    {
                        "id": "38",
                        "name": "INFORMÁTICA Y SOCIEDAD",
                        "nrc": "EIF410",
                        "credits": 2,
                        "description": "Curso para aprender de tecnología con relación a la sociedad",
                        "prerequisites": ["INGENIERÍA DE SISTEMAS II"]
                    },
                    {
                        "id": "39",
                        "name": "OPTATIVA",
                        "nrc": "7",
                        "credits": 3,
                        "description": "Curso disciplinario",
                        "prerequisites": []
                    },
                    {
                        "id": "40",
                        "name": "OPTATIVA",
                        "nrc": "8",
                        "credits": 3,
                        "description": "Curso disciplinario",
                        "prerequisites": []
                    }
                ]
            }
        }
        ];


        this.estadisticas = [{}];
    }

    validateUser(username, password) {
        const user = this.users.find(u => u.username === username && u.password === password);
        return user ? user.role : null;
    }

    getCoursePrerequisites(courseName) {
        const course = this.courses.find(c => c.name === courseName);
        return course ? course.prerequisites : null;
    }

    getCoursesData() {
        return this.courses;
    }

    getDT() {
        return this.anosConCiclosYCursos;
    }
}

const database = new Database();
export default database;
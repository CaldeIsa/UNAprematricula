﻿class Database {
    constructor() {

        this.users = [
            { username: 'admin@una.cr', password: 'admin123', role: 1 },
            { username: 'est@una.cr', password: 'est123', role: 2 }
        ];

        this.anosConCiclosYCursos = {
            "PRIMER AÑO": {
                "I CICLO": ["FUNDAMENTOS DE LA INFORMÁTICA", "MATEMÁTICA PARA INFORMÁTICA", "ESTUDIOS GENERALES I", "ESTUDIOS GENERALES II", "INGLÉS INTEGRADO I"],
                "II CICLO": ["PROGRAMACIÓN I", "CÁLCULO I", "ESTUDIOS GENERALES III", "ESTUDIOS GENERALES IV", "INGLÉS INTEGRADO II"]
            },
            "SEGUNDO AÑO": {
                "I CICLO": ["PROGRAMACIÓN II", "ÁLGEBRA LINEAL", "SOPORTE TÉCNICO", "ESTRUCTURAS DISCRETAS", "INGLÉS INTEGRADO III"],
                "II CICLO": ["PROGRAMACIÓN III", "ESTRUCTURAS DE DATOS", "ARQUITECTURA DE COMPUTADORAS", "LA ORGANIZACIÓN Y SU ENTORNO", "PROBABILIDAD Y ESTADÍSTICA"]
            },
            "TERCER AÑO": {
                "I CICLO": ["PROGRAMACIÓN VI", "INGENIERÍA DE SISTEMAS I", "DISEÑO E IMPLEMENTACIÓN DE BASES DE DATOS", "SISTEMAS OPERATIVOS", "COMUNICACIONES Y REDES DE COMPUTADORES"],
                "II CICLO": ["PARADIGMAS DE PROGRAMACIÓN", "INGENIERÍA DE SISTEMAS II", "ADMINISTRACIÓN DE BASES DE DATOS", "INVESTIGACIÓN DE OPERACIONES Y SUS APLICACIONES", "LIDERAZGO Y ORGANIZACIÓN"]
            },
            "CUARTO AÑO": {
                "I CICLO": ["DISEÑO Y PROGRAMACIÓN DE MÓVILES", "INGENIERÍA DE SISTEMAS III", "OPTATIVA", "OPTATIVA", "MÉTODOS DE INVESTIGACIÓN"],
                "II CICLO": ["PPS", "APLICACIONES INFORMÁTICAS GLOBALES", "OPTATIVA", "OPTATIVA", "INFORMÁTICA Y SOCIEDAD"]
            }
        };

        this.courses = [
            // Primer año
            { id: 1, name: 'FUNDAMENTOS DE LA INFORMÁTICA', nrc: 'EIF200', credits: 3, description: 'Introducción a la lógica, desarrollo de lenguaje técnico y manejo de aplicaciones', status: 'Aprobado', prerequisites: 'Ingreso a la carrera' },
            { id: 2, name: 'MATEMÁTICA PARA INFORMÁTICA', nrc: 'MAT030', credits: 4, description: 'Introducción a la matemática lógica y funcional', status: 'Aprobado', prerequisites: 'Ingreso a la carrera' },
            { id: 3, name: 'ESTUDIOS GENERALES I', nrc: '1', credits: 3, description: 'Humanismo', status: 'Aprobado', prerequisites: 'Ver cursos generales' },
            { id: 4, name: 'ESTUDIOS GENERALES II', nrc: '2', credits: 3, description: 'Humanismo', status: 'Aprobado', prerequisites: 'Ver cursos generales' },
            { id: 5, name: 'INGLÉS INTEGRADO I', nrc: 'LIX410', credits: 4, description: 'Introducción y repaso al idioma inglés', status: 'Aprobado', prerequisites: 'Ingreso a la carrera' },

            { id: 6, name: 'PROGRAMACIÓN I', nrc: 'EIF201', credits: 4, description: 'Continuación con la lógica en programación orientada a objetos en C++', status: 'Aprobado', prerequisites: ['FUNDAMENTOS DE LA INFORMÁTICA', 'MATEMÁTICA PARA INFORMÁTICA'] },
            { id: 7, name: 'CÁLCULO I', nrc: 'MAT002', credits: 4, description: 'Nivel de matemática superior', status: 'Aprobado', prerequisites: ['MATEMÁTICA PARA INFORMÁTICA'] },
            { id: 8, name: 'ESTUDIOS GENERALES III', nrc: '3', credits: 3, description: 'Humanismo', status: 'Aprobado', prerequisites: 'Ver cursos generales' },
            { id: 9, name: 'ESTUDIOS GENERALES IV', nrc: '4', credits: 3, description: 'Humanismo', status: 'Aprobado', prerequisites: 'Ver cursos generales' },
            { id: 10, name: 'INGLÉS INTEGRADO II', nrc: 'LIX411', credits: 4, description: 'Siguiente nivel del idioma con temas más avanzados', status: 'Aprobado', prerequisites: ['INGLÉS INTEGRADO I'] },

            // Segundo año
            { id: 11, name: 'PROGRAMACIÓN II', nrc: 'EIF204', credits: 4, description: 'Modelo y arquitectura en la programación orientada a objetos en C++', status: 'Matriculado', prerequisites: ['PROGRAMACIÓN I'] },
            { id: 12, name: 'ÁLGEBRA LINEAL', nrc: 'MAT005', credits: 4, description: 'Nivel de matemática relacionado al álgebra', status: 'Matriculado', prerequisites: ['CÁLCULO I'] },
            { id: 13, name: 'SOPORTE TÉCNICO', nrc: 'EIF202', credits: 3, description: 'Fundamentos de hardware y electrónica', status: 'Matriculado', prerequisites: ['FUNDAMENTOS DE LA INFORMÁTICA'] },
            { id: 14, name: 'ESTRUCTURAS DISCRETAS', nrc: 'EIF203', credits: 3, description: 'Matemáticas con un enfoque discreto a la estructura en programación', status: 'Matriculado', prerequisites: ['FUNDAMENTOS DE LA INFORMÁTICA', 'MATEMÁTICA PARA INFORMÁTICA'] },
            { id: 15, name: 'INGLÉS INTEGRADO III', nrc: 'LIX412', credits: 4, description: 'Enfoque al nivel más avanzado', status: 'Matriculado', prerequisites: ['INGLÉS INTEGRADO II'] },

            { id: 16, name: 'PROGRAMACIÓN III', nrc: 'EIF206', credits: 4, description: 'Programación orientada a Java, Swing y Bases de datos', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN II', 'CÁLCULO I'] },
            { id: 17, name: 'ESTRUCTURAS DE DATOS', nrc: 'EIF207', credits: 4, description: 'Programación orientada al manejo y arquitectura estructurada', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN II', 'ESTRUCTURAS DISCRETAS'] },
            { id: 18, name: 'ARQUITECTURA DE COMPUTADORAS', nrc: 'EIF205', credits: 3, description: 'Relacionado en la parte lógica de los componentes', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN I', 'SOPORTE TÉCNICO'] },
            { id: 19, name: 'LA ORGANIZACIÓN Y SU ENTORNO', nrc: 'EIF404', credits: 3, description: 'Introducción a la organización de la empresa', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN I'] },
            { id: 20, name: 'PROBABILIDAD Y ESTADÍSTICA', nrc: 'MAT006', credits: 3, description: 'Matemática orientada a la probabilidad y estadística', status: 'Pendiente', prerequisites: ['CÁLCULO I', 'ESTRUCTURAS DISCRETAS'] },

            // Tercer año
            { id: 21, name: 'PROGRAMACIÓN VI', nrc: 'EIF209', credits: 4, description: 'Programación en Java', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN III'] },
            { id: 22, name: 'INGENIERÍA DE SISTEMAS I', nrc: 'EIF210', credits: 4, description: 'Curso en una organización', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN III'] },
            { id: 23, name: 'DISEÑO E IMPLEMENTACIÓN DE BASES DE DATOS', nrc: 'EIF211', credits: 3, description: 'Curso de bases de datos', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN III', 'ESTRUCTURAS DE DATOS'] },
            { id: 24, name: 'SISTEMAS OPERATIVOS', nrc: 'EIF212', credits: 3, description: 'Curso de sistemas operativos en Linux', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN II', 'ARQUITECTURA DE COMPUTADORAS'] },
            { id: 25, name: 'COMUNICACIONES Y REDES DE COMPUTADORAS', nrc: 'EIF208', credits: 3, description: 'Curso de redes informáticas', status: 'Pendiente', prerequisites: ['ARQUITECTURA DE COMPUTADORAS'] },

            { id: 26, name: 'PARADIGMAS DE PROGRAMACIÓN', nrc: 'EIF400', credits: 4, description: 'Se aprenderá sobre los diferentes paradigmas de programación', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN III'] },
            { id: 27, name: 'INGENIERÍA DE SISTEMAS II', nrc: 'EIF401', credits: 4, description: 'Continuación de curso en una organización', status: 'Pendiente', prerequisites: ['INGENIERÍA DE SISTEMAS I'] },
            { id: 28, name: 'ADMINISTRACIÓN DE BASES DE DATOS', nrc: 'EIF402', credits: 4, description: 'Creación de respaldos de bases de datos', status: 'Pendiente', prerequisites: ['DISEÑO E IMPLEMENTACIÓN DE BASES DE DATOS', 'SISTEMAS OPERATIVOS'] },
            { id: 29, name: 'INVESTIGACIÓN DE OPERACIONES Y SUS APLICACIONES', nrc: 'EIF412', credits: 3, description: 'Curso para aprender de operaciones utilizando programación', status: 'Pendiente', prerequisites: ['ÁLGEBRA LINEAL', 'PROBABILIDAD Y ESTADÍSTICA', 'PROGRAMACIÓN III'] },
            { id: 30, name: 'LIDERAZGO Y ORGANIZACIÓN', nrc: 'EIF407', credits: 3, description: 'Curso para aprender a ser un líder en una organización', status: 'Pendiente', prerequisites: ['LA ORGANIZACIÓN Y SU ENTORNO'] },

            // Cuarto año
            { id: 31, name: 'DISEÑO Y PROGRAMACIÓN DE MÓVILES', nrc: 'EIF411', credits: 4, description: 'Creación de aplicaciones móviles', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN IV'] },
            { id: 32, name: 'INGENIERÍA DE SISTEMAS III', nrc: 'EIF406', credits: 4, description: 'Último curso realizado en una organización', status: 'Pendiente', prerequisites: ['INGENIERÍA DE SISTEMAS II'] },
            { id: 33, name: 'OPTATIVA', nrc: '5', credits: 3, description: 'Curso disciplinario', status: 'Pendiente', prerequisites: 'Ver cursos optativos' },
            { id: 34, name: 'OPTATIVA', nrc: '6', credits: 3, description: 'Curso disciplinario', status: 'Pendiente', prerequisites: 'Ver cursos optativos' },
            { id: 35, name: 'MÉTODOS DE INVESTIGACIÓN', nrc: 'EIF413', credits: 3, description: 'Aprendizaje para crear artículos científicos', status: 'Pendiente', prerequisites: ['PROBABILIDAD Y ESTADÍSTICA'] },

            { id: 36, name: 'PPS', nrc: 'EIF408', credits: 5, description: 'Práctica profesional supervisada', status: 'Pendiente', prerequisites: ['PROGRAMACIÓN VI', 'INGENIERÍA DE SISTEMAS II', 'ADMINISTRACIÓN DE BASES DE DATOS'] },
            { id: 37, name: 'APLICACIONES INFORMÁTICAS GLOBALES', nrc: 'EIF409', credits: 4, description: 'Creación de una aplicación móvil para una organización', prerequisites: ['PROGRAMACIÓN VI', 'INGENIERÍA DE SISTEMAS II', 'ADMINISTRACIÓN DE BASES DE DATOS'] },
            { id: 39, name: 'OPTATIVA', nrc: '7', credits: 3, description: 'Curso disciplinario', status: 'Pendiente', prerequisites: 'Ver cursos optativos' },
            { id: 40, name: 'OPTATIVA', nrc: '8', credits: 3, description: 'Curso disciplinario', status: 'Pendiente', prerequisites: 'Ver cursos optativos' },
            { id: 38, name: 'INFORMÁTICA Y SOCIEDAD', nrc: 'EIF410', credits: 2, description: 'Curso para aprender de tecnología con relación a la sociedad', prerequisites: ['INGENIERÍA DE SISTEMAS II'] }
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
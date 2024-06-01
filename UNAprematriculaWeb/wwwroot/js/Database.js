class Database {
    constructor() {
        this.users = [
            { username: '1', password: '1', role: 1 },
            { username: '2', password: '2', role: 2 }
        ];

        this.courses = [
            // Primer año
            { name: 'FUNDAMENTOS DE LA INFORMATICA', nrc: 'EIF200', credits: 3, description: 'Introducción a la lógica, desarrollo de lenguaje técnico y manejo de aplicaciones', prerequisites: 'Ingreso a la carrera' },
            { name: 'MATEMATICA PARA INFORMATICA', nrc: 'MAT030', credits: 4, description: 'Introducción a la matematica lógica y funcional', prerequisites: [] },
            { name: 'ESTUDIOS GENERALES I', nrc: '1', credits: 3, description: 'Humanismo', prerequisites: [] },
            { name: 'ESTUDIOS GENERALES II', nrc: '2', credits: 3, description: 'Humanismo', prerequisites: [] },
            { name: 'INGLÉS INTEGRADO I', nrc: 'LIX410', credits: 4, description: 'Introducción repaso al idioma de inglés', prerequisites: [] },

            { name: 'PROGRAMACIÓN I', nrc: 'EIF201', credits: 4, description: 'Continuación con la lógica en programación orientado a objetos en c++', prerequisites: ['FUNDAMENTOS DE LA INFORMATICA', 'MATEMATICA PARA INFORMATICA'] },
            { name: 'INGLÉS INTEGRADO II', nrc: 'LIX411', credits: 4, description: 'Siguiente nivel del idioma con temas más avanzados', prerequisites: ['INGLÉS INTEGRADO I'] },
            { name: 'CÁLCULO I', nrc: 'MAT002', credits: 4, description: 'Nivel de matemática superior', prerequisites: ['MATEMATICA PARA INFORMATICA'] },
            { name: 'ESTUDIOS GENERALES III', nrc: '3', credits: 3, description: 'Humanismo', prerequisites: [] },
            { name: 'ESTUDIOS GENERALES IV', nrc: '4', credits: 3, description: 'Humanismo', prerequisites: [] },

            // Segundo año
            { name: 'SOPORTE TECNICO', nrc: 'EIF202', credits: 3, description: 'Fundamentos de hardware y electrónica', prerequisites: ['FUNDAMENTOS DE LA INFORMATICA'] },
            { name: 'PROGRAMACION II', nrc: 'EIF204', credits: 4, description: 'Modelo y arquitectura en la programación orientado a objetos en c++', prerequisites: ['PROGRAMACIÓN I'] },
            { name: 'ALGEBRA LINEAL', nrc: 'MAT005', credits: 4, description: 'Nivel de matemática relacionado al álgebra', prerequisites: ['CÁLCULO I'] },
            { name: 'ESTRUCTURAS DISCRETAS', nrc: 'EIF203', credits: 3, description: 'Matemáticas con un enfoque discreto a la estructura en programación', prerequisites: ['FUNDAMENTOS DE LA INFORMATICA', 'MATEMATICA PARA INFORMATICA'] },
            { name: 'INGLÉS INTEGRADO III', nrc: 'LIX412', credits: 4, description: 'Enfoque al nivel más avanzado', prerequisites: ['INGLÉS INTEGRADO II'] },

            { name: 'ARQUITECTURA DE COMPUTADORAS', nrc: 'EIF205', credits: 3, description: 'Relacionado en la parte lógica de los componentes', prerequisites: ['PROGRAMACIÓN I', 'SOPORTE TECNICO'] },
            { name: 'PROGRAMACIÓN III', nrc: 'EIF206', credits: 4, description: 'Programación orientado a Java, Swing y Base de datos', prerequisites: ['PROGRAMACION II', 'CÁLCULO I'] },
            { name: 'ESTRUCTURAS DE DATOS', nrc: 'EIF207', credits: 4, description: 'Programación Orientado al manejo a la arquitectura estructurada', prerequisites: ['ESTRUCTURAS DISCRETAS', 'PROGRAMACION II'] },
            { name: 'LA ORGANIZACIÓN Y SU ENTORNO', nrc: 'EIF404', credits: 3, description: 'Introducción a la organización de la empresa', prerequisites: ['PROGRAMACIÓN I'] },
            { name: 'PROBABILIDAD Y ESTADÍSTICA', nrc: 'MAT006', credits: 3, description: 'Matemática orientado a la probabilidad y estadística', prerequisites: ['CÁLCULO I', 'ESTRUCTURAS DISCRETAS'] },

            // Tercer año
            { name: 'COMUNICACIONES Y REDES DE COMPUTADORES', nrc: 'EIF208', credits: 3, description: 'Curso de redes informáticas', prerequisites: ['ARQUITECTURA DE COMPUTADORAS'] },
            { name: 'PROGRAMACIÓN VI', nrc: 'EIF209', credits: 4, description: 'Programacion en Java', prerequisites: ['PROGRAMACIÓN III'] },
            { name: 'INGENIERÍA DE SISTEMAS I', nrc: 'EIF210', credits: 4, description: 'Curso en una organizacion', prerequisites: ['PROGRAMACIÓN III'] },
            { name: 'DISEÑO E IMPLEMENTACIÓN DE BASE DE DATOS', nrc: 'EIF211', credits: 3, description: 'Curso de bases de datos', prerequisites: ['PROGRAMACIÓN III', 'ESTRUCTURAS DE DATOS'] },
            { name: 'SISTEMAS OPERATIVOS', nrc: 'EIF212', credits: 3, description: 'Curso de sistemas operativos en Linux', prerequisites: ['ARQUITECTURA DE COMPUTADORAS', 'PROGRAMACION II'] },

            { name: 'PARADIGMAS DE PROGRAMACIÓN', nrc: 'EIF400', credits: 4, description: 'Se aprenderá sobre los diferentes paradigmas de programación', prerequisites: ['PROGRAMACIÓN III'] },
            { name: 'INGENIERÍA DE SISTEMAS II', nrc: 'EIF401', credits: 4, description: 'Continuación de curso en una organización', prerequisites: ['INGENIERÍA DE SISTEMAS I'] },
            { name: 'ADMINISTRACIÓN DE BASES DE DATOS', nrc: 'EIF402', credits: 4, description: 'Creación de respaldos de bases de datos', prerequisites: ['DISEÑO E IMPLEMENTACIÓN DE BASE DE DATOS', 'SISTEMAS OPERATIVOS'] },
            { name: 'LIDERAZGO Y ORGANIZACIÓN', nrc: 'EIF407', credits: 3, description: 'Curso para aprender a ser un líder en una organización', prerequisites: ['LA ORGANIZACIÓN Y SU ENTORNO'] },
            { name: 'INVESTIGACIÓN DE OPERACIONES Y SUS APLICACIONES', nrc: 'EIF412', credits: 3, description: 'Curso para aprender de operaciones utilizando programación', prerequisites: ['ALGEBRA LINEAL', 'PROBABILIDAD Y ESTADÍSTICA'] },

            // Cuarto año
            { name: 'INGENIERÍA DE SISTEMAS III', nrc: 'EIF406', credits: 4, description: 'Último curso realizado en una organización', prerequisites: ['INGENIERÍA DE SISTEMAS II'] },
            { name: 'DISEÑO Y PROGRAMACIÓN DE MOVILES', nrc: 'EIF411', credits: 4, description: 'Creación de aplicaciones móviles', prerequisites: ['PROGRAMACIÓN VI'] },
            { name: 'MÉTODOS DE INVESTIGACIÓN', nrc: 'EIF413', credits: 3, description: 'Aprendizaje para crear artículos científicos', prerequisites: ['PROBABILIDAD Y ESTADÍSTICA'] },
            { name: 'OPTATIVA', nrc: '5', credits: 3, description: 'Curso disciplinario', prerequisites: [] },
            { name: 'OPTATIVA', nrc: '6', credits: 3, description: 'Curso disciplinario', prerequisites: [] },

            { name: 'PPS', nrc: 'EIF408', credits: 5, description: 'Práctica profesional supervisada', prerequisites: ['PROGRAMACIÓN VI', 'INGENIERÍA DE SISTEMAS II', 'ADMINISTRACIÓN DE BASES DE DATOS'] },
            { name: 'APLICACIONES INFORMÁTICAS GLOBALES', nrc: 'EIF409', credits: 4, description: 'Creación de una aplicación móvil para una organización', prerequisites: ['PROGRAMACIÓN VI', 'INGENIERÍA DE SISTEMAS II', 'ADMINISTRACIÓN DE BASES DE DATOS'] },
            { name: 'INFORMÁTICA Y SOCIEDAD', nrc: 'EIF410', credits: 2, description: 'Curso para aprender de tecnología con relación a la sociedad', prerequisites: ['INGENIERÍA DE SISTEMAS II'] },
            { name: 'OPTATIVA', nrc: '7', credits: 3, description: 'Curso disciplinario', prerequisites: [] },
            { name: 'OPTATIVA', nrc: '8', credits: 3, description: 'Curso disciplinario', prerequisites: [] }
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
}

const database = new Database();
export default database;
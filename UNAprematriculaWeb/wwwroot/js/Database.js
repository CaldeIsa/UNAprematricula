class Database {
    constructor() {
        this.users = [
            { username: '1', password: '1', role: 1 },
            { username: '2', password: '2', role: 2 }
        ];

        this.courses = [
            { name: 'FUNDAMENTOS DE LA INFORMATICA', prerequisites: [] },
            { name: 'MATEMATICA PARA INFORMATICA', prerequisites: [] },
            { name: 'ESTUDIOS GENERALES I', prerequisites: [] },
            { name: 'ESTUDIOS GENERALES II', prerequisites: [] },
            { name: 'INGLÉS INTEGRADO I', prerequisites: [] },

            { name: 'PROGRAMACIÓN I', prerequisites: ['FUNDAMENTOS DE LA INFORMATICA', 'MATEMATICA PARA INFORMATICA'] },
            { name: 'INGLÉS INTEGRADO II', prerequisites: ['INGLÉS INTEGRADO I'] },
            { name: 'CÁLCULO I', prerequisites: ['MATEMATICA PARA INFORMATICA'] },
            { name: 'ESTUDIOS GENERALES III', prerequisites: [] },
            { name: 'ESTUDIOS GENERALES IV', prerequisites: [] },

            { name: 'SOPORTE TECNICO', prerequisites: ['FUNDAMENTOS DE LA INFORMATICA'] },
            { name: 'PROGRAMACION II', prerequisites: ['PROGRAMACIÓN I'] },
            { name: 'ALGEBRA LINEAL', prerequisites: ['CÁLCULO I'] },
            { name: 'ESTRUCTURAS DISCRETAS', prerequisites: ['FUNDAMENTOS DE LA INFORMATICA','MATEMATICA PARA INFORMATICA'] },
            { name: 'INGLÉS INTEGRADO III', prerequisites: ['INGLÉS INTEGRADO II'] },

            { name: 'ARQUITECTURA DE COMPUTADORAS', prerequisites: ['PROGRAMACIÓN I','SOPORTE TECNICO'] },
            { name: 'PROGRAMACIÓN III', prerequisites: ['PROGRAMACION II', 'CÁLCULO I'] },
            { name: 'ESTRUCTURAS DE DATOS', prerequisites: ['ESTRUCTURAS DISCRETAS','PROGRAMACION II'] },
            { name: 'LA ORGANIZACIÓN Y SU ENTORNO', prerequisites: ['PROGRAMACIÓN I'] },
            { name: 'PROBABILIDAD Y ESTADÍSTICA', prerequisites: ['CÁLCULO I', 'ESTRUCTURAS DISCRETAS'] },

            { name: 'COMUNICACIONES Y REDES DE COMPUTADORES', prerequisites: ['ARQUITECTURA DE COMPUTADORAS'] },
            { name: 'PROGRAMACIÓN VI', prerequisites: ['PROGRAMACIÓN III'] },
            { name: 'INGENIERÍA DE SISTEMAS I', prerequisites: ['PROGRAMACIÓN III'] },
            { name: 'DISEÑO E IMPLEMENTACIÓN DE BASE DE DATOS', prerequisites: ['PROGRAMACIÓN III','ESTRUCTURAS DE DATOS'] },
            { name: 'SISTEMAS OPERATIVOS', prerequisites: ['ARQUITECTURA DE COMPUTADORAS','PROGRAMACION II'] },

            { name: 'PARADIGMAS DE PROGRAMACIÓN', prerequisites: ['PROGRAMACIÓN III'] },
            { name: 'INGENIERÍA DE SISTEMAS II', prerequisites: ['INGENIERÍA DE SISTEMAS I'] },
            { name: 'ADMINISTRACIÓN DE BASES DE DATOS', prerequisites: ['DISEÑO E IMPLEMENTACIÓN DE BASE DE DATOS','SISTEMAS OPERATIVOS'] },
            { name: 'LIDERAZGO Y ORGANIZACIÓN', prerequisites: ['LA ORGANIZACIÓN Y SU ENTORNO'] },
            { name: 'INVESTIGACIÓN DE OPERACIONES Y SUS APLICACIONES', prerequisites: ['ALGEBRA LINEAL','PROBABILIDAD Y ESTADÍSTICA'] },

            { name: 'INGENIERÍA DE SISTEMAS III', prerequisites: ['INGENIERÍA DE SISTEMAS II'] },
            { name: 'DISEÑO Y PROGRAMACIÓN DE MOVILES', prerequisites: ['PROGRAMACIÓN VI'] },
            { name: 'MÉTODOS DE INVESTIGACIÓN', prerequisites: ['PROBABILIDAD Y ESTADÍSTICA'] },
            { name: 'OPTATIVA', prerequisites: [] },
            { name: 'OPTATIVA', prerequisites: [] },

            { name: 'PPS', prerequisites: ['PROGRAMACIÓN VI','INGENIERÍA DE SISTEMAS II','ADMINISTRACIÓN DE BASES DE DATOS'] },
            { name: 'APLICACIONES INFORMÁTICAS GLOBALES', prerequisites: ['PROGRAMACIÓN VI','INGENIERÍA DE SISTEMAS II','ADMINISTRACIÓN DE BASES DE DATOS'] },
            { name: 'INFORMÁTICA Y SOCIEDAD', prerequisites: ['INGENIERÍA DE SISTEMAS II'] },
            { name: 'OPTATIVA', prerequisites: [] },
            { name: 'OPTATIVA', prerequisites: [] }
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

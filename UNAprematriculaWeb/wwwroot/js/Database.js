
class Database {
    constructor() {
        this.users = [
            { username: '1', password: '1', role: 1 },
            { username: '2', password: '2', role: 2 }
        ];

        this.courses= [
            { name: 'FUNDAMENTOS DE LA INFORMATICA' }
        ];

        this.estadisticas = [

            {}
        ];

    }

    validateUser(username, password) {
        const user = this.users.find(u => u.username === username && u.password === password);
        return user ? user.role : null;
    }
}

const database = new Database();
export default database;

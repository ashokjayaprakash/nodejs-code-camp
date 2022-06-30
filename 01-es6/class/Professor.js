import { User } from './User.js'

export class Professor extends User {

    constructor(name, email) {
        super(name, email)
        this.type = "PROFESSOR"
    }

    getType() {
        return `PROFF CLASS : ${this.type}`;
    }

    
}
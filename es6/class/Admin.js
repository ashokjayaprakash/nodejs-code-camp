import { User } from './User.js'

export class Admin extends User {

    constructor(name, email) {
        super(name, email)
        this.type = "ADMIN"
    }

    getType() {
        return `ADMIN CLASS : ${this.type}`;
    }
}
import { Role } from './Role.js';

export class User {

    constructor(name, email) {
        this.name = name;
        this.email = email
    }

    set userName (name) {
        this.name = name
    }

    get userName() {
        return this.name
    }

    getDetails() {
        return { name: this.name, email: this.email };
    }
}
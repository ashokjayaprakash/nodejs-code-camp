import { User } from './User.js'

export class Student extends User {

    constructor(name, email) {
        super(name, email)
        this.type = "STUDENT"
    }

    getType() {
        return `STUDENT CLASS : ${this.type}`;
        // return "STUDENT CLASS :" + this.type;
    }

}
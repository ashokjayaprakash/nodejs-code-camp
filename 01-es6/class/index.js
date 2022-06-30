/**
 * ES6 Classs
 */

class User {

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

    getRole() {
        if(this instanceof Admin) {
            return new Role(['CREATE', 'UPDATE', 'DELETE', 'READ'])
        } else if (this instanceof Professor) {
            return new new Role(['UPDATE', 'READ'])
        } else {
            return new Role(['READ'])
        }
    }
}

class Role {
    constructor(role) {
        this.role = role
    }
}

class Student extends User {

    constructor(name, email) {
        super(name, email)
        this.type = "STUDENT"
    }

    getType() {
        return `STUDENT CLASS : ${this.type}`;
        // return "STUDENT CLASS :" + this.type;
    }

}

class Professor extends User {

    constructor(name, email) {
        super(name, email)
        this.type = "PROFESSOR"
    }

    getType() {
        return `PROFF CLASS : ${this.type}`;
    }

    
}

class Admin extends User {

    constructor(name, email) {
        super(name, email)
        this.type = "ADMIN"
    }

    getType() {
        return `ADMIN CLASS : ${this.type}`;
    }
}

let student = new Student("AJ", "aj@grr.la")
// console.log(student.getRole())
// student.userName = "Ja";
console.log(student.getDetails())
console.log(student.getType())

console.log("----------------------------")

let admin = new Admin("ADMIN", "aj@grr.la")
console.log(admin.getDetails())
console.log(admin.getType())
console.log(admin.getRole())
console.log(student.getRole())

console.log("----------------------------")
admin.userName = "TEST_ADMIN_SETTER"
console.log(admin.userName)
// Functional Instance

function User(name, email) {
    this.name = name;
    this.email = email;
}

User.prototype.getDetails = function() {
    return { userName: this.name, useEmail: this.email, test: this.test };
}

let user = new User('AJ', 'aj@grr.la');
console.log(user.getDetails())
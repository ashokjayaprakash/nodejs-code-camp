import  { Student } from './Student.js';
import { Admin } from './Admin.js';

let student = new Student("AJ", "aj@grr.la")
// console.log(student.getRole())
// student.userName = "Ja";
console.log(student.getDetails())
console.log(student.getType())

console.log("----------------------------")

let admin = new Admin("ADMIN", "aj@grr.la")
console.log(admin.getDetails())
console.log(admin.getType())

console.log("----------------------------")
admin.userName = "TEST_ADMIN_SETTER"
console.log(admin.userName)
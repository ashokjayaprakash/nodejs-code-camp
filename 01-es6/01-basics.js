// Constant
var PI = 3.14;
PI = 20;
console.log(PI);

// Non Block Scope - var
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

// Block Scope
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

function add(a, b) {
    return a + b
}

const addition = (a, b) => {
    return a + b
}

let arr = [1,2,3,4,5,6,7]
console.log(arr.filter( i => i > 5));
console.log(arr.filter(function (i) {
    return i > 5
}));

function f (...a) {
    console.log(a);
}
f(1, 2, "hello", true, 7) === 9

var list = []
var [ u, , v ] = list
console.log(u,v);


var obj = { name: "AJ", mobile: "123"  };
var { name } = obj
console.log(name);
console.log(obj.name);




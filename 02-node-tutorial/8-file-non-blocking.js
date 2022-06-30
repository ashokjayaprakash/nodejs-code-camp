const { writeFile } = require('fs');


console.log("START");
writeFile("1.log", dataProcess(), (err, data) => {
    console.log("DONE")
});
console.log("END");

function dataProcess() {
    let data = "";
    for(let i=0; i < 10000000; i++) {
        data += i;
        data += '\n'
    }
    return data;
}
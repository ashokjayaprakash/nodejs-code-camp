const { writeFileSync } = require('fs');


console.log("START");
writeFileSync("1.log", dataProcess());
console.log("END");

function dataProcess() {
    let data = "";
    for(let i=0; i < 10000000; i++) {
        data += i;
        data += '\n'
    }
    return data;
}
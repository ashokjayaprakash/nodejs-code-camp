const childProcess = require('node:child_process');

/**
 * Child Process Core Functionality 
 * 
 * spawn
 * executeFile
 * fork
 * exec
 *
 */

const child = childProcess.spawn('ls')
process.stdin.pipe(child.stdin)
child.stdout.on('data', (data)=> {
    console.log(data.toString())
})


const file = childProcess.execFileSync("./1-setTimeout.js");
console.log(file)
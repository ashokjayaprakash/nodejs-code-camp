/*
Global Exception

uncaughtException - Any program level exception
unhandledRejection - Any Promise rejection is unhadled

*/

// Global level - To the start of program
process.on('uncaughtException', (err, origin) => {
    console.log(
      process.stderr.fd,
      `Caught exception: ${err}\n` +
      `Exception origin: ${origin}`
    );
});
  
process.on('unhandledRejection', (err, origin) => {
    console.log("unhandledRejection",
      process.stderr.fd,
      `Caught exception: ${err}\n` +
      `Exception origin: ${origin}`
    );
});
  

  setTimeout(() => {
    console.log('This will still run.');
  }, 500);
  

  console.log("Memory Usage", process.memoryUsage())

  

  function userDetail() {
      return new Promise((res, rej) => {
          setTimeout(() => {
              rej(new Error("Custom error"))
          }, 500 )
      } )
  }

  userDetail().then((data) => {
    console.log("User Result", data)
});

//   Intentionally cause an exception, but don't catch it.
  nonexistentFunc();
  console.log('This will not run.');


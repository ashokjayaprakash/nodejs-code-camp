const express = require('express');
const app = express();
const PORT = 3000;
console.log("Path : ", __dirname + '/public');
app.use(express.static(__dirname + '/public'));



app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
var express = require('express');
const controllers = require('./controllers');
var app = express();

require('dotenv').config();

app.get('/primes/:primeNumber', (req, res) => {
    let number = req.params.primeNumber;
    const result = controllers.primeResult(number);
    res.send({ result });
});

console.log(`Servidor activo en puerto: ${process.env.PORT}`);
app.listen(process.env.PORT);

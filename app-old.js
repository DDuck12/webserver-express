const http = require('http');

http.createServer((req, res) => {

        res.writeContinue(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Diego',
            edad: 22,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();

    })
    .listen(8080);

console.log('Escuchando puerto 8080');
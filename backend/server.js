const app = require('./app')

app.listen(3007,() => {
    console.log(
        //PNEDIENTE AGREGAR PORT A ENV
        "Servidor inicializado. Escuchando solicitudes en el puerto 3007"
    )
})
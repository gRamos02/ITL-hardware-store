require('dotenv').config()
const app = require('./app')

app.listen(process.env.SERVER_PORT,() => {
    console.log(
        //PNEDIENTE AGREGAR PORT A ENV
        "Servidor inicializado. Escuchando solicitudes en el puerto " + process.env.SERVER_PORT
    )
})
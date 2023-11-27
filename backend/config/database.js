try {
  require('dotenv').config();
} catch(err) {
  console.log("Dependencia dotenv no encontrada");
}

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD , 
    database: process.env.DB_NAME , 
    host: process.env.DB_HOST,
    logging: console.log,
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
      dateStrings: true, // Para asegurarse de que las fechas se traten como cadenas
      typeCast: true,    // Para asegurarse de que las fechas se analicen correctamente
    },
    timezone: '-06:00', // Zona horaria de ciudad de México
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD , 
    database: process.env.DB_NAME , 
    host: process.env.DB_HOST,
    logging: false,
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
      dateStrings: true, // Para asegurarse de que las fechas se traten como cadenas
      typeCast: true,    // Para asegurarse de que las fechas se analicen correctamente
    },
    timezone: '-06:00', // Zona horaria de ciudad de México
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD , 
    database: process.env.DB_NAME , 
    host: process.env.DB_HOST,
    logging: false,
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
      dateStrings: true, // Para asegurarse de que las fechas se traten como cadenas
      typeCast: true,    // Para asegurarse de que las fechas se analicen correctamente
    },
    timezone: '-06:00', // Zona horaria de ciudad de México
  }
}
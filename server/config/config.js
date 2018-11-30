//===============================
// Puerto - Variables de proceso en local y producción
//===============================
process.env.PORT = process.env.PORT || 3000;


//===============================
// Entorno
//===============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//===============================
// Base de Datos
//===============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:cafe123456@ds161901.mlab.com:61901/cafe'
}

process.env.URLDB = urlDB;
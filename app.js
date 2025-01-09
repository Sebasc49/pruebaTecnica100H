//DEPENDENCIAS
import express from 'express';
import dotenv from 'dotenv';
import {connectionMongo} from './src/config/dataBase.js';


//  LA CONFIGURACION DE LA BASE DE DATOS
const app = express();
dotenv.config();
connectionMongo();


const port = process.env.PORT


// EJECUTAMOS EL SERVIDOR
app.listen(port, ()=>{
    console.log('El servidor esta ejecutandose en el puerto', port);
});

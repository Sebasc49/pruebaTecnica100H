//DEPENDENCIAS
import express from 'express';
import dotenv from 'dotenv';
import {connectionMongo} from './src/config/dataBase.js';
import { usersRouter } from "./src/routes/users.routes.js";
import { loginRouter } from "./src/routes/login.routes.js";
import cors from "cors";


//  LA CONFIGURACION DE LA BASE DE DATOS
const app = express();
dotenv.config();
connectionMongo(); 
app.use(cors());


const port = process.env.PORT

app.use(express.json());
app.use("/usuarios", usersRouter);
app.use("/iniciarSesion", loginRouter); 



// EJECUTAMOS EL SERVIDOR
app.listen(port, ()=>{
    console.log('El servidor esta ejecutandose en el puerto', port);
});

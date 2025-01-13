import { userModel } from "../models/user.model.js";
import bcrypt from "bcryptjs" 

export const createUser = async(req, res) => {
    try {
        const {fullName, email, password} = req.body;
        const codedPassword = await bcrypt.hash(password, 10); // Para la encriptacion de la contraseña

        const newUser = await userModel.create({
            fullName,
            email,
            password: codedPassword
        });

        return res.status(201).json({ // mensaje de 201 para la creacion del usuario
            "mensaje": "Usuario creado satisfactoriamente",
            "datos": newUser
        });

    } catch (error) {
        return res.status(400).json({ // Tenemos mensaje de 400 cuando al crearse usuario haya error
            "mensaje": "Ocurrio un error al crear un usuario",
            "problema": error || error.message
        });
    }
};
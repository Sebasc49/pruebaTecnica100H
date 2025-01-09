import mongoose from "mongoose";

export async function connectionMongo() {
  try {
    await mongoose.connect(process.env.DB_URL,{});
    console.log('Conexion exitosa con la Base de Datos');
  } catch (error) {
    console.error('Error de Conexión:' + error);
  }
}

export default connectionMongo;

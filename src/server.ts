import  express from 'express'
import router from './router'
import db from './config/db';

const server = express()

async function connectDB() {
    try{
        await db.authenticate()
        db.sync()
        console.log('Conexion exitosa a la base de datos ');
    } catch (error) {
        console.log(error);
        console.log('Hubo un error al conectar a la base de datos ');
        
    }
}
connectDB()

server.use('/api/products', router);


export default server
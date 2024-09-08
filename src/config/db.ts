import { Sequelize } from "sequelize";

import dotenv from 'dotenv';

dotenv.config()

console.log(process.env.DATABASE_URL);

// Primera opcion para arreglar la base de datos con coneccion SSL
const db = new Sequelize(process.env.DATABASE_URL);

// Segunda opcion para manejar el certificado SSL 
// const db = new Sequelize('postgresql://rest_api_node_typescript_a2pc_user:RdIzUdhb9tWEPyb8qdvzvPMRJkEsXmIK@dpg-crei79ogph6c73escrsg-a.virginia-postgres.render.com/rest_api_node_typescript_a2pc',{
//     dialectOptions : {
//         ssl:{
//             require: false
//         }
//     }
// });

export default db;
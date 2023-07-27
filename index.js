import tareasRouter from './src/routes/tareas.routes';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import 'dotenv/config';
import './src/database/dbConnection';

//1.Iniciamos Express
const app = express();
//2.Configuración del server
app.set('port', process.env.PORT || 4000);
//3.Loop del servidor
app.listen(app.get('port'), () => {
  console.log("Estoy en el puerto " + app.get('port'));
});
//4.middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')))
//5.rutas
app.use('/apiTareas', tareasRouter);
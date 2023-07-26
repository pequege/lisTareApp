import mongoose, { Schema, model } from "mongoose";

const tareaScheme = new Schema({
  tarea: {
    type: String,
    minLength: 5,
    maxLength: 200,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: String,
    enum: ['completo', 'pendiente'],
    default: 'pendiente', // Valor por defecto: 'pendiente' al crear la tarea
  }
})

const Tarea = model('tarea', tareaScheme);

export default Tarea;

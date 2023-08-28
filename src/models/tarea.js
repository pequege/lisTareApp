import { Schema, model } from "mongoose";

const tareaScheme = new Schema({
  descripcion: {
    type: String,
    minLength: 5,
    maxLength: 100,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  pendiente: {
    type: Boolean,
    default: 'true', // Valor por defecto: 'pendiente' al crear la tarea
  },
  editando: {
    type: Boolean,
    default: 'false', // Valor por defecto: 'pendiente' al crear la tarea
  }
})

const Tarea = model('tarea', tareaScheme);

export default Tarea;

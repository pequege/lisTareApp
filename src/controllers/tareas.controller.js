import Tarea from '../models/tarea';

export const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();//trae la lista de todas las tareas
    res.status(200).json(tareas)
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar la lista de tareas"
    })
  }
}

export const obtenerTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findById(req.params.id);//trae la lista de todas las tareas
    res.status(200).json(tarea);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar la tarea solicitada"
    })
  }
}

export const crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new Tarea(req.body);
    await nuevaTarea.save();
    res.status(201).json({
      mensaje: "La tarea se creó correctamente"
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear tarea"
    })
  }
}

export const borrarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La tarea fue eliminada correctamente"
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar eliminar la tarea solicitada"
    })
  }
}

export const editarTarea = async (req, res) => {
  try {
    await Tarea.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "La tarea fue modificada correctamente"
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar modificar la tarea solicitada"
    })
  }
}
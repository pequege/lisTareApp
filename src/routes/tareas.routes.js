import { Router } from "express";
import {
  crearTarea,
  obtenerTareas,
  obtenerTarea,
  borrarTarea,
  editarTarea,
} from "../controllers/tareas.controller";
import { check } from "express-validator";

const router = Router();

router
  .route("/tareas")
  .get(obtenerTareas)
  .post(
    [
      check("descripcion")
        .notEmpty()
        .withMessage("El campo de tarea es obligatorio")
        .isLength({min: 5, max: 100})
        .withMessage("Las tareas deben contener entre 5 y 100 caracteres")
    ],
    crearTarea
  );
router
  .route("/tareas/:id")
  .get(obtenerTarea)
  .delete(borrarTarea)
  .put(editarTarea);

export default router;

import { Router } from "express";
import {
  crearTarea,
  obtenerTareas,
  obtenerTarea,
  borrarTarea,
  editarTarea,
} from "../controllers/tareas.controller";

const router = Router();

router.route("/tareas").get(obtenerTareas).post(crearTarea);
router
  .route("/tarea/:id")
  .get(obtenerTarea)
  .delete(borrarTarea)
  .put(editarTarea);

export default router;

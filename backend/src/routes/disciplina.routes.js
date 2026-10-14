import { Router } from "express";

import { 
    getDisciplinas,
    getDisciplinaPorId
} from "../controllers/disciplina.controller.js";

const router = Router();

// Lista todas as disciplinas
router.get("/", getDisciplinas);

// Busca uma disciplina específica pelo ID
router.get("/:id", getDisciplinaPorId);

export default router;
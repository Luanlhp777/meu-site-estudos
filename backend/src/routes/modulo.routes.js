// Importa o Router do Express
import { Router } from "express";

// Importa a função do Controller responsável por listar os módulos
import { getModulos, getModuloPorId } from "../controllers/modulo.controller.js";

// Importa o Controller responsável por listar disciplinas de um módulo
import { getDisciplinasPorModulo } from "../controllers/disciplina.controller.js";

// Cria uma instância do roteador
const router = Router();

// Define a rota GET para listar todos os módulos
router.get("/", getModulos);

// Busca um módulo específico pelo ID
router.get("/:id", getModuloPorId);

// Lista todas as disciplinas pertencentes a um módulo
router.get("/:id/disciplinas", getDisciplinasPorModulo);

// Exportar o roteador para utilizarmos no app.js
export default router;
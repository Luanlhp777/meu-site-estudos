// Importa o Router do Express
import { Router } from "express";

// Importa a função do Controller responsável por listar os módulos
import { getModulos, getModuloPorId } from "../controllers/modulo.controller.js";

// Cria uma instância do roteador
const router = Router();

// Define a rota GET para listar todos os módulos
router.get("/", getModulos);

// Busca um módulo específico pelo ID
router.get("/:id", getModuloPorId);

// Exportar o roteador para utilizarmos no app.js
export default router;
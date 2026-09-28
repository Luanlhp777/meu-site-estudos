import { Router } from "express";
import { 
    getProjetos,
    getProjetoPorId,
    postProjeto,
    putProjeto,
    deleteProjeto
} from "../controllers/projeto.controller.js";

const router = Router();

router.get("/", getProjetos);

router.get("/:id", getProjetoPorId);

router.post("/", postProjeto);

router.put("/:id", putProjeto);

router.delete("/:id", deleteProjeto);

export default router;
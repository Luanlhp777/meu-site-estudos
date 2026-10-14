import express from "express";
import { pool } from "./config/db.js";
import projetoRoutes from "./routes/projeto.routes.js";
import moduloRoutes from "./routes/modulo.routes.js";
import disciplinaRoutes from "./routes/disciplina.routes.js";

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para interpretar requisições JSON
app.use(express.json());

// Rotas de projetos
app.use("/api/projetos", projetoRoutes);

// Rotas de módulos
app.use("/api/modulos", moduloRoutes);

app.use("/api/disciplinas", disciplinaRoutes);

app.get("/", (req, res) => {
    res.json({
        mensagem: "API do Meu Site de Estudos funcionando!"
    });
});

app.get("/teste-banco", async (req, res) => {
    try {
        const [resultado] = await pool.query("SELECT 1 AS conectado");

        res.json({
            mensagem: "Conexão com MySQL realizada com sucesso!",
            resultado
        });
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao conectar com o banco de dados."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
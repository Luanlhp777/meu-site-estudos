import express from "express";
import { pool } from "./config/db.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

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
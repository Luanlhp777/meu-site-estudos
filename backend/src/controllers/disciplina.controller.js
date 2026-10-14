// Importa a função responsável por consultar as disciplinas no banco
import {
    listarDisciplina,
    listarDisciplinasPorModulo,
    buscarDisciplinaPorId
} from "../models/disciplina.model.js";

// Importa a função que busca um módulo pelo ID
import { buscarModuloPorId } from "../models/modulo.model.js";

// Controller responsável por listar todas as disciplinas
export async function getDisciplinas(req, res) {
    try {
        // Chama o Model e aguarda o resultado da consulta
        const disciplinas = await listarDisciplina();

        // Retorna as disciplinas em JSON com status HTTP 200
        res.status(200).json(disciplinas);

    } catch (erro) {
        // Registra o erro no terminal para diagnóstico
        console.error("Erro ao listar disciplinas:", erro);

        // Retorna HTTP 500 caso ocorra uma falha
        res.status(500).json({
            mensagem: "Erro interno ao buscar disciplinas."
        });
    }
}

// Controller responsável por listar disciplinas de um módulo
export async function getDisciplinasPorModulo(req, res) {
    try {
        // Obtém o ID do módulo informado na URL
        const { id } = req.params;

        // Converte o ID recebido para número
        const idModulo = Number(id);

        // Verifica se o ID é um número inteiro positivo
        if (!Number.isInteger(idModulo) || idModulo <= 0) {
            return res.status(400).json({
                mensagem: "O ID do módulo deve ser um número inteiro positivo."
            });
        }

        // Verifica se o módulo informado existe no banco
        const modulo = await buscarModuloPorId(idModulo);

        // Se o número não existir, retorna HTTP 404
        if (!modulo) {
            return res.status(404).json({
                mensagem: "Módulo não encontrado."
            })
        }

        // Consulta as disciplinas pertencentes ao módulo
        const disciplinas = await listarDisciplinasPorModulo(id);

        // Retorna as disciplinas encontradas
        res.status(200).json(disciplinas);

    } catch (erro) {
        // Registra o erro no terminal
        console.error("Erro ao buscar disciplinas do módulo:", erro);

        // Retorna erro interno do servidor
        res.status(500).json({
            mensagem: "Erro interno ao buscar disciplinas do módulo."
        });
    }
}

export async function getDisciplinaPorId(req, res) {
    try {
        const { id } = req.params;

        const idDisciplina = Number(id);

        if (!Number.isInteger(idDisciplina) || idDisciplina <= 0) {
            return res.status(400).json({
                mensagem: "O ID da disciplina deve ser um número inteiro positivo."
            });
        }

        const disciplina = await buscarDisciplinaPorId(idDisciplina);

        if (!disciplina) {
            return res.status(404).json({
                mensagem: "Disciplina não encontrada."
            });
        }

        res.status(200).json(disciplina);

    } catch (erro) {
        console.error("Erro ao buscar disciplina:", erro);

        res.status(500).json({
            mensagem: "Erro interno ao buscar disciplina."
        });
    }    
}
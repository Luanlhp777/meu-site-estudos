// Importa a conexão com o banco de dados
import { pool } from "../config/db.js";

// Função responsável por listar todas as disciplinas
export async function listarDisciplina() {

    // Executa a consulta SQL no MySQL
    const [disciplinas] = await pool.query(`
        SELECT
            d.id_disciplina,
            d.id_modulo,
            d.nome,
            d.descricao,
            d.slug,
            m.nome AS nome_modulo
        FROM disciplinas AS d
        INNER JOIN modulos AS m
            ON d.id_modulo = m.id_modulo
        ORDER BY d.id_modulo, d.nome;
    `);

    // Retorna os registros encontrados
    return disciplinas;
}

// Lista as disciplinas pertencentes a um módulo específico
export async function listarDisciplinasPorModulo(idModulo) {

    // Consulta as disciplinas e relaciona cada uma ao seu módulo
    const [disciplinas] = await pool.query(`
        SELECT
            d.id_disciplina,
            d.id_modulo,
            d.nome,
            d.descricao,
            d.slug,
            m.nome AS nome_modulo
        FROM disciplinas AS d
        INNER JOIN modulos AS m
            ON d.id_modulo = m.id_modulo
        WHERE d.id_modulo = ?
        ORDER BY d.nome;
    `, [idModulo]);

    // Retorna as disciplinas encontradas
    return disciplinas;
}

// Busca uma disciplina específica pelo ID
export async function buscarDisciplinaPorId(id) {

    // Consulta a disciplina e o módulo ao qual pertence
    const [disciplinas] = await pool.query(`
        SELECT
            d.id_disciplina,
            d.id_modulo,
            d.nome,
            d.descricao,
            d.slug,
            m.nome AS nome_modulo
        FROM disciplinas AS d
        INNER JOIN modulos AS m
            on d.id_modulo = m.id_modulo
        WHERE d.id_disciplina = ?;
    `, [id]);
    
    // Retorna somente a primeira disciplina encontrada
    return disciplinas[0];
}
// Essa separação vai evitar que o app.js vire um arquivo gigante conforme for adicionando aulas, disciplinas, tecnologias, login, etc.
import { pool } from "../config/db.js";

export async function listarProjetos() {
    const [projetos] = await pool.query(`
        SELECT
            id_projeto,
            nome,
            slug,
            descricao_curta,
            descricao_completa,
            url_repositorio,
            url_site,
            destaque,
            status,
            criado_em,
            atualizado_em
        FROM projetos
        ORDER BY id_projeto DESC
    `);

    return projetos;
}

export async function buscarProjetoPorId(id) {
    const [projetos] = await pool.query(
        `
        SELECT
            id_projeto,
            nome,
            slug,
            descricao_curta,
            descricao_completa,
            url_repositorio,
            url_site,
            destaque,
            status,
            criado_em,
            atualizado_em
        FROM projetos
        WHERE id_projeto = ?
        `,
        [id]
    );

    return projetos[0];
}

export async function criarProjeto(projeto) {
    const {
        nome,
        slug,
        descricao_curta,
        descricao_completa,
        url_repositorio,
        url_site,
        destaque,
        status
    } = projeto;

    const [resultado] = await pool.query(
        `
        INSERT INTO projetos (
            nome,
            slug,
            descricao_curta,
            descricao_completa,
            url_repositorio,
            url_site,
            destaque,
            status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            nome,
            slug,
            descricao_curta,
            descricao_completa,
            url_repositorio,
            url_site,
            destaque,
            status
        ]
    );

    return {
        id_projeto: resultado.insertId,
        ...projeto
    };
}

export async function atualizarProjeto(id, projeto) {
    const {
        nome,
        slug,
        descricao_curta,
        descricao_completa,
        url_repositorio,
        url_site,
        destaque,
        status
    } = projeto;

    const [resultado] = await pool.query(
        `
        UPDATE projetos
        SET
            nome = ?,
            slug = ?,
            descricao_curta = ?,
            descricao_completa = ?,
            url_repositorio = ?,
            url_site = ?,
            destaque = ?,
            status = ?
        WHERE id_projeto = ?
        `,
        [
            nome,
            slug,
            descricao_curta,
            descricao_completa,
            url_repositorio,
            url_site,
            destaque,
            status,
            id
        ]
    );

    return resultado.affectedRows;
}

export async function excluirProjeto(id) {
    const [resultado] = await pool.query(
        `
        DELETE FROM projetos
        WHERE id_projeto = ?
        `,
        [id]
    );

    return resultado.affectedRows;
}
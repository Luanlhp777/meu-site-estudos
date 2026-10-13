import { pool } from "../config/db.js";

export async function listarModulos() {
    const [modulos] = await pool.query(`
        SELECT
            id_modulo,
            nome,
            descricao,
            ordem
        FROM modulos
        ORDER BY ordem;
    `);

    return modulos;
    
}

// Busca um módulo específico pelo ID
export async function buscarModuloPorId(id) {
    const [modulos] = await pool.query(
        `SELECT
            id_modulo,
            nome,
            descricao,
            ordem
         FROM modulos
         WHERE id_modulo = ?`,
        [id]
    );

    return modulos[0];
}
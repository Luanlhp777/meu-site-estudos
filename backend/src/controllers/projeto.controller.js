import { 
    listarProjetos,
    buscarProjetoPorId,
    criarProjeto,
    atualizarProjeto,
    excluirProjeto
} from "../models/projeto.model.js";

export async function getProjetos(req, res) {
    try {
        const projetos = await listarProjetos();

        res.status(200).json(projetos);
    } catch (erro) {
        console.error("Erro ao buscar projetos:", erro);

        res.status(500).json({
            mensagem: "Erro interno ao buscar projetos."
        });
    }
}

export async function getProjetoPorId(req, res) {
    try {
        const { id } = req.params;

        const projeto = await buscarProjetoPorId(id);

        if (!projeto) {
            return res.status(404).json({
                mensagem: "Projeto não encontrado."
            });
        }

        res.status(200).json(projeto);

    } catch (erro) {
        console.error("Erro ao buscar projeto:", erro);

        res.status(500).json({
            mensagem: "Erro interno ao buscar projeto."
        });
    }
}

export async function postProjeto(req, res) {
    try {
        const {
            nome,
            slug,
            descricao_curta,
            descricao_completa = null,
            url_repositorio = null,
            url_site = null,
            destaque = 0,
            status = "Em desenvolvimento"
        } = req.body;

        if (!nome || !slug || !descricao_curta) {
            return res.status(400).json({
                mensagem: "Nome, slug e descrição curta são obrigatórios."
            });
        }

        const projeto = {
            nome,
            slug,
            descricao_curta,
            descricao_completa,
            url_repositorio,
            url_site,
            destaque,
            status
        };

        const novoProjeto = await criarProjeto(projeto);

        res.status(201).json(novoProjeto);

    } catch (erro) {
        console.error("Erro ao criar projeto:", erro);

        if (erro.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
                mensagem: "Já existe um projeto com esse slug."
            });
        }

        res.status(500).json({
            mensagem: "Erro interno ao criar projeto."
        });
    }
}

export async function putProjeto(req, res) {
    try {
        const { id } = req.params;

        const {
            nome,
            slug,
            descricao_curta,
            descricao_completa = null,
            url_repositorio = null,
            url_site = null,
            destaque = 0,
            status = "Em desenvolvimento"
        } = req.body;

        if (!nome || !slug || !descricao_curta) {
            return res.status(400).json({
                mensagem: "Nome, slug e descrição curta são obrigatórios."
            });
        }

        const projeto = {
            nome,
            slug,
            descricao_curta,
            descricao_completa,
            url_repositorio,
            url_site,
            destaque,
            status
        };

        const linhasAfetadas = await atualizarProjeto(id, projeto);

        if (linhasAfetadas === 0) {
            return res.status(404).json({
                mensagem: "Projeto não encontrado."
            });
        }

        res.status(200).json({
            mensagem: "Projeto atualizado com sucesso."
        });

    } catch (erro) {
        console.error("Erro ao atualizar projeto:", erro);

        if (erro.code === "ER_DUP_ENTRY") {
            return res.status(409).json({
                mensagem: "Já existe um projeto com esse slug."
            });
        }

        res.status(500).json({
            mensagem: "Erro interno ao atualizar projeto."
        });
    }
}

export async function deleteProjeto(req, res) {
    try {
        const { id } = req.params;

        const linhasAfetadas = await excluirProjeto(id);

        if (linhasAfetadas === 0) {
            return res.status(404).json({
                mensagem: "Projeto não encontrado."
            });
        }

        res.status(200).json({
            mensagem: "Projeto excluído com sucesso."
        });

    } catch (erro) {
        console.error("Erro ao excluir projeto:", erro);

        res.status(500).json({
            mensagem: "Erro interno ao excluir projeto."
        });
    }
}
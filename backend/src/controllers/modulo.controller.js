// Importa a função responsável por consultar os módulos no banco
import { 
    listarModulos,
    buscarModuloPorId 
} from "../models/modulo.model.js";

// Controller responsável por responder à requisição GET
export async function getModulos(req, res) {
    try {
        // Chama o Model e aguarda os dados retornados pelo MySQL
        const modulos = await listarModulos();

        // Retorna os módulos em JSON com status HTTP 200
        res.status(200).json(modulos);

    } catch (erro) {
        // Registra o erro no terminal para diagnóstico
        console.error("Erro ao listar módulos:", erro);

        // Retorna uma resposta HTTP 500 em caso de falha
        res.status(500).json({
            mensagem: "Erro interno ao buscar módulos."
        });
    }
}

// Controller responsável por buscar um módulo pelo ID
export async function getModuloPorId(req, res) {
    try {
        // Obtém o ID informado na URL
        const { id } = req.params;

        // Consulta o módulo no banco de dados
        const modulo = await buscarModuloPorId(id);

        // Verifica se o módulo foi encontrado
        if (!modulo) {
            return res.status(404).json({
                mensagem: "Módulo não encontrado."
            });
        }

        // Retorna o módulo encontrado
        res.status(200).json(modulo);

    } catch (erro) {
        // Registra o erro no terminal
        console.error("Erro ao buscar módulo:", erro);

        // Retorna erro interno do servidor
        res.status(500).json({
            mensagem: "Erro interno ao buscar módulo."
        });
    }    
}
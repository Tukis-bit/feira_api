import * as repo from "../../repository/feiraRepository.js"
import { validarVisitante,validarcpf } from "../../validation/usuarios/visitanteValidation.js";

export default async function cadastrarService(novoCadastro){

    validarVisitante(novoCadastro);

    let registros = await repo.verificarCPF(novoCadastro.cpf);
    validarcpf(registros);

    let id = await repo.inserirCadastro(novoCadastro);
    return id;
}
import * as repo from "../../repository/feiraRepository.js"
import { validarVisitante } from "../../validation/usuarios/visitanteValidation.js";

export default async function cadastrarService(novoCadastro){

    validarVisitante(novoCadastro);

    let id = await repo.inserirCadastro(novoCadastro);
    return id;
}
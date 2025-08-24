import * as repo from "../../repository/feiraRepository.js";


export default async function consultarVisitanteService(nome){
if(!nome){
    nome = ' ';
}

let registros = await repo.consultarNome(nome);

registros = registros.map(registro => {
    return {
      ...registro,
      ex_aluno: registro.ex_aluno == 0 ? "Não" : "Sim"
    };
  });

  return registros;
}


import * as repo from "../../repository/feiraRepository.js";


export default async function consultarVisitanteIdService(id){
    if(!id){
        id = "";
    }

    let registros = await repo.consultarId(id);

    registros = registros.map(registro => {
        return {
          ...registro,
          ex_aluno: registro.ex_aluno == 0 ? "Não" : "Sim"
        };
      });
    
      return registros;
    }

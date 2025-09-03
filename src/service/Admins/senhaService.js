import { senhaObrigatoria } from "../../validation/admin/senhavalidation.js";
import { verificarSenha } from "../../repository/loginCodigoReepository.js";

    export default async function senhaCorreta(senha){
        senhaObrigatoria(senha);
        let quant = await verificarSenha(senha);
    

        let resp;
        if(quant){
    resp = 'Acesso Confirmado!!';
        }
        else{
            resp ='Acesso Negado!!';
        }


        return resp;
    }
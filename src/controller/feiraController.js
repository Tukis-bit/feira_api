import { Router } from "express";
const endpoint = Router();

import cadastrarService from "../service/visitante/cadastrarService.js";


endpoint.post('/cadastro', async(req,resp) =>{

    try {
        let novoCadastro = req.body;
       let id = await cadastrarService(novoCadastro); 
    
        resp.send({id})
        
    } 
    catch (err) {
        logErro(err);
        resp.status(400).send(criarErro(err));

    }

    })



export default endpoint;
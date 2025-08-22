import { Router } from "express";
const endpoint = Router();

import * as repo from "../repository/feiraRepository.js"

endpoint.post('/cadastro', async(req,resp) =>{

    let novoCadastro = req.body;
    let id = await repo.inserirCadastro(novoCadastro)

    resp.send({id})
})



export default endpoint;
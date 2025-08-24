import { Router } from "express";
const endpoint = Router();

import cadastrarService from "../service/visitante/cadastrarService.js";
import consultarVisitanteService from "../service/visitante/consultarVisitanteService.js";
import consultarVisitanteIdService from "../service/visitante/consultarIDService.js";

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

    });

    endpoint.get('/consultar', async(req,resp) => {
        try {
        let nome = req.query.nome;
        let registros = await consultarVisitanteService(nome);

        resp.send({registros});
        } 
        catch (error) {
            logErro(err);
            resp.status(400).send(criarErro(err));
        }
    });

    endpoint.get('/consultar/:id', async(req,resp) =>{
        try {
        let id = Number(req.params.id);
        let registros = await consultarVisitanteIdService(id);
        resp.send(registros)

        } 
        catch (error) {
            logErro(err);
            resp.sendStatus(400).send(criarErro(err));
        }
    })



export default endpoint;
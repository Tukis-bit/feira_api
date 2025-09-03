import { Router } from "express";
const endpoint = Router();

import senhaService from '../service/Admins/senhaService.js';


endpoint.post('/senha', async(req,resp) => {
    try {
          let senha = req.body.senha;
        let resposta = await senhaService(senha);
     
        resp.send({
         mensagem: resposta
        })
        
           
       } 
       catch (err) {
           logErro(err);
           resp.status(400).send(criarErro(err));
   
       }
});
export default endpoint;
import './utils/global.js';

import "dotenv/config.js";

import adicionaRotas from './rotas.js';
import express from "express";
import cors from "cors"; 


const api = express();
api.use(express.json());
api.use(cors());



// configura os controllers
adicionaRotas(api);





const PORTA = process.env.PORTA;
api.listen(PORTA, () => console.log('---> API subiu com sucesso na porta ' +PORTA));
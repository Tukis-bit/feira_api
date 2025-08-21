 import "dotenv/config.js"

import express from "express";
import mysql from "mysql2/promise";
import cors from "cors"; 

const api = express();
api.use(express.json());
api.use(cors());






const PORTA = process.env.PORTA;
api.listen(PORTA, () => console.log('API subiu com sucesso na porta ' +PORTA));
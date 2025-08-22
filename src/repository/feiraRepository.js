import connection from "./connection.js";

export async function inserirCadastro(novoCadastro){
    const comando = `
    insert into tb_visitante (
    nome,
    escolaridade,
    interesse,
    previsao_chegada,
    email,
    sabendo_feira,
    telefone,
    ex_aluno,
    cpf
) 
    values
   (?,?,?,?,?,?,?,?,?)
   `

   let insert = await connection.query(comando,[  novoCadastro.nome,
    novoCadastro.escolaridade,
    novoCadastro.interesse,
    novoCadastro.previsao_chegada,
    novoCadastro.email,
    novoCadastro.sabendo_feira,
    novoCadastro.telefone,
    novoCadastro.ex_aluno,
    novoCadastro.cpf]);
   let  info = insert[0];  

   return info.insertId
} 


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

export async function consultarNome(nome){
    let comando = `
    
    select * from tb_visitante
    where nome like  ? 
    `
 
    let info = await connection.query(comando,['%' + nome + '%']);
    let regis = info[0]

    console.log(regis.length);
    return regis;
}

export async function verificarCPF(cpf){
    let comando = `
    
    select nome,cpf,email,ex_aluno from tb_visitante
    where cpf = ? 
    `
 
    let info = await connection.query(comando,[ cpf ]);
    let regis = info[0]

    return regis;

}

export async function consultarId(id){
    let comando = `
    
    select nome,cpf,email,ex_aluno from tb_visitante
    where id = ?
    ` 

    let info = await connection.query(comando,[id]);
    let registros = info[0];

    return registros;
}
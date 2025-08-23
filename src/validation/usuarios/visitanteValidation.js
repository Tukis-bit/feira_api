export function validarVisitante(novoCadastro){

if(!novoCadastro.escolaridade)
    throw new Error('Escolaridade obrigatória');

if(!novoCadastro.interesse)
    throw new Error('Interesse obrigatória');

if(!novoCadastro.previsao_chegada)
    throw new Error('Previsão de chegada obrigatória');

if(!novoCadastro.email)
    throw new Error('Email obrigatória');

if(!novoCadastro.sabendo_feira)
    throw new Error('Como ficou sabendo soube da feira obrigatória');

if(isNaN (novoCadastro.telefone))
    throw new Error('Telefone inválido');

if(novoCadastro.ex_aluno == undefined)
    throw new Error('É ex aluno obrigatória');

if(isNaN(novoCadastro.cpf))
    throw new Error('CPF inválido');

if(!novoCadastro.nome){
    throw new Error('Nome obrigatório');
}

}
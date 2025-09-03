export function senhaObrigatoria(senha){
    if(!senha){
        throw new Error('Senha Obrigatóra');
    }
}
const cliente = {
    nome: 'Carlos',
    idade: 42,
    cpf: '02536845689',
    email: 'carlinhos@email.com',
    dependentes: [{
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/03/2008'},
    {
        nome:'Benício',
        parentesco:'fliho', 
        dataNasc:'05/05/2003'}],
    saldo: 100,

    depositar:function(valor){
        this.saldo += valor 
    }
}

// como percorrer objetos
let relatorio = ''

for (let info in cliente){
    if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){
        continue
    }else{
        relatorio += `
        ${info} - ${cliente[info]}
        `
    }
}

console.log(relatorio)
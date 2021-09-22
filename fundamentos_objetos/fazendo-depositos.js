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

console.log(cliente.saldo)

cliente.depositar(40)

console.log(cliente.saldo)



const clientes = [
    {
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
        dataNasc:'05/05/2003'}]
    },
    {
    nome: 'Luana',
    idade: 35,
    cpf: '07598256891',
    email: 'luluehdms@email.com',
    dependentes: [{
        nome: 'Eduarda',
        parentesco: 'filha',
        dataNasc: '01/02/2021'}]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
console.table(listaDependentes)
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

// se possui dependentes enviar oferta de seguro

function oferecerSeg(obj){
    const objChaves = Object.keys(obj)
    if(objChaves.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

oferecerSeg(cliente)

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
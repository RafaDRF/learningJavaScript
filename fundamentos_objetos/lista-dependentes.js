const cliente = {
    nome: "Carlos",
    idade: 42,
    cpf: "02536845689",
    email: "carlinhos@email.com",
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2008"
    }]
}

cliente.dependentes.push({
    nome:"Benício",
    parentesco:"fliho", 
    dataNasc:"05/05/2003"
})


const anoNacimentoDeCrianca = 2021 - 13

const indexStartYear = 6

const clientesComDependentesCrianca = cliente.dependentes.filter(dependente => 
    Number(dependente.dataNasc.substring(indexStartYear)) >= anoNacimentoDeCrianca )

console.log(clientesComDependentesCrianca)
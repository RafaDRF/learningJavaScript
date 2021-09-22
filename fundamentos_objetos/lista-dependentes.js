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

// Criança <= 13 anos
const nascCrianca = 2021 - 13

const dependentesCriancas = cliente.dependentes.filter(dependente => Number(dependente.dataNasc.substring(6)) >= nascCrianca )

console.log(dependentesCriancas)
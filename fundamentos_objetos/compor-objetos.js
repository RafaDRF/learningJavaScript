const cliente = {
    nome: "Carlos",
    idade: 42,
    cpf: "02536845689",
    email: "carlinhos@email.com"
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2008"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)
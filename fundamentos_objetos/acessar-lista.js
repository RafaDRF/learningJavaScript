const cliente = {
    nome: "Carlos",
    idade: 42,
    cpf: "02536845689",
    email: "carlinhos@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]
// notação de colchetes

console.log(cliente[chaves[1]])

chaves.forEach(chave => console.log(cliente[chave]))
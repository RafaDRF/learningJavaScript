function Cliente(nome, cpf, email, saldo){

    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const julia = new Cliente('Julia', '05998475298', 'jujuba@email.com', '20')

console.log(julia)
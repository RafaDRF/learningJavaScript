function Cliente(nome, cpf, email, saldo){

    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const julia = new ClientePoupanca('Julia', '02698745825', 'juuuuhl@email.com', 100, 300)

console.log(julia)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

console.log(julia.saldoPoup)
class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibeSaldo(){
        console.log(this.saldo)
    }
}

const rafa = new Cliente('Rafael', 'rafarafa@email.com', '12345678945', 80)

rafa.exibeSaldo()
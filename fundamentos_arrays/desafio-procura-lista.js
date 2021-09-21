// Crie uma função que receba como argumento o nome do aluno
// Verifique se o aluno está presente na lista e retorne a media final que está no msm indice
// Caso o aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado

const alunos = ['Ana', 'Jorge', 'Alberto']
const medias = [10,3,8]
let mediasAlunos = [alunos, medias]

const notaDe = (nome) =>{
    if(!mediasAlunos[0].includes(nome)){
        return "aluno não encontrado"
    }
    
    let index = mediasAlunos[0].indexOf(nome)
    return mediasAlunos[1][index]
}

console.log(notaDe('Jorge'))

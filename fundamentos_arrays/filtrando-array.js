const alunos = ['Ana', 'Jorge', 'Alberto']

const medias = [10,3,8]

let mediasAlunos = [alunos, medias]

// let alunosReprovados = alunos.filter((_,indice) => medias[indice] < 6 )
let alunosReprovados = mediasAlunos[0].filter((_,indice) => mediasAlunos[1][indice] < 6 )

console.log(alunosReprovados)
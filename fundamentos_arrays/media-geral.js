const salaJS = [7,6,8,6,6,9,5]
const salaJava = [4,6,8,7,8]
const salaPython = [7,2,8]

function calcMedia(numArray){
    let somaNotas = numArray.reduce((acum, atual) => acum+atual,0)
    return somaNotas/numArray.length
}

console.log(calcMedia(salaPython).toFixed(1))

let notas = [10, 6.5, 8, 7.5]

let media = notas.reduce((acum,atual) => acum + atual,0)/notas.length

console.log(media)
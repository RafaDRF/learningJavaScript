// conversão implícita

const numero = 457
const numeroString = "457"

console.log(numero == numeroString)

console.log(numero + numeroString)

// conversão explícita
// Number()
// String()  .toString()
console.log(numero + Number(numeroString))
// compara valor e tipo
console.log(numero === numeroString)
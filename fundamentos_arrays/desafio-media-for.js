const lista = [100, 200, 300, 400, 500, 600]

let acumulador = 0

for(let i = 0;i< lista.length;i++){
    acumulador += lista[i]
}
let media = acumulador/lista.length

console.log(media)
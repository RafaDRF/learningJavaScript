const lista = [100, 200, 300, 400, 500, 600]

let acumulador = 0

//callback 
lista.forEach(num => {
    acumulador += num
})

let media = acumulador/lista.length

console.log(media)
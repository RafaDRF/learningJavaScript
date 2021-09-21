// declaração de função
function printText(text){
    console.log(text)
}

function soma (a,b){
    resul = a + b 
    return resul
}

printText(soma(5,8))

// expressão de função

const mult = function(a, b){ return a * b}

console.log(mult(4,5))

// principal diferença : hoisting
// expressão é interpretada como const, então so pode ser usada dps de declarada
 
// Arrow Function
const apresentarArrow = nome => `meu nome é ${nome}`

console.log(apresentarArrow("Rafa"))

const somaPequenos = (a, b) =>{
    if(a > 10 || b > 10){
        return "Numeros maiores que 10";
    } else{
        return a + b
    }  
}
console.log(somaPequenos(1,1))
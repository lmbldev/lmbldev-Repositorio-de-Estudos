// function soma(a, b){
//     return a+b
// }

// console.log(soma(2, 2));

// função anônima

(function (x, y){
    console.log(x+y);
})(5, 5);


// function expression

const soma = function(x, y){
    return x+y;
}

let resultado = soma(2, 5);

console.log("Function expression simples: ", resultado);

// arrow function
const somav2 = (x, y) => {
    return x+y;
}

console.log("Arrow function: ", somav2(2, 5));

// arrow function 1 linha
const somav3 = (x, y) => x+y 
console.log("arrow function 1 linha: ", somav3(2,5));

// função invocada
(
    ()=>{
        console.log("Função invocada separada.");
    }
)
(); //Este último parenteses é a chamada da função invocada.

(()=>{console.log('Função invocada 1 linha.')})();

// Sem spread
const somav4 = (x, y, z) => x+y+z;
console.log(somav4(2,2,2, 3));

// com spread
const somav5 = (...numeros) => {
    let aux = 0;
    for(i of numeros){
        aux += i;
    }
    return aux;
}

console.log("SPREAD: ", somav5(2, 3, 10, 30, 55));

// Subtração
const subtracaov1 = (x, y, z) => x-y-z;
console.log("A subtração dá: ", subtracaov1(10, 3, 2));

// Divisão
const divisaov1 = (x, y, z) => x/y/z;
console.log("A divisão dá: ", divisaov1(10, 3, 2));

// Multiplicação
const multiplicacaov1 = (x, y, z) => x*y*z;
console.log("A divisão dá: ", multiplicacaov1(10, 3, 2));

// Soma Desafio
const somad = (x, y, z) => x+y+z;
console.log("A soma dá: ", somad(10, 3, 2));
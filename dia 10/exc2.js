const numeros = [];
const indices = [];
const arrayInvertido = [];

contadorIndice = 0;
let pedirNumeros = 0;

for(let i = 0; i < 5; i++){
pedirNumeros = parseInt(prompt('Insira um número '+ (i + 1) + ':'));
numeros[i] = pedirNumeros;
console.log(numeros)
}

for(let i = 0; i < 5; i++){
  if(numeros[i] === pedirNumeros){
    indices[contadorIndice] = 1
    contadorIndice++
  }
}

console.log('Array invertido')

let contador = 4
for(let i = 0; i < 5; i++){
  arrayInvertido[i] = numeros[contador]
  contadorIndice--
}
console.log(arrayInvertido)

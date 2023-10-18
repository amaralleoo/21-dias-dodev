let array = [];
let arrayInvertido = []; 
let quantidadeArray = parseInt(prompt('Quantos números deseja inserir?'))

for(let i = 0; i < quantidadeArray; i++){
  let numero = parseInt(prompt('Digite o ' + (i + 1) + '° número'))
  array[i] = numero
}

console.log('Array original: ' + array)

let contador = quantidadeArray - 1
for(let i = 0; i < quantidadeArray; i++){
  arrayInvertido[i] = array[contador]
  contador--
}

console.log('Array invertido: ' + arrayInvertido)

const array = [];
const indices = [];
let contadorIndice = 0;

const numero = parseInt(prompt('Digite um número para ser procurado no array:'))
  for(let o = 0; o < 10; o++){
    const elemento = parseInt(prompt('Digite o número ' + (o + 1) + ':'));
    array[o] = elemento;
  }
  for(let o = 0; o < 10; o++){
    if(array[o] === numero){
      indices[contadorIndice] = 1
      contadorIndice++
    }
  }

  console.log('O número ' + numero + ' foi encontrado nos índices: ' + indices);
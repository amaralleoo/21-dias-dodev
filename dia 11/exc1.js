arrayNomes = [];
arrayNotas = [];
continuar = true;
quantAluno = 0;
do{
let nmrAluno = parseInt(prompt('Insira o NÚMERO do aluno:'))
let nome = prompt('Insira o NOME do aluno')
let nota = Number(prompt('Insira a NOTA do aluno: ' + nmrAluno))

arrayNomes.push(nome);
arrayNotas.push(nota);
quantAluno++
continuar  = prompt('Deseja continuar inserindo notas? (S/N)').toUpperCase() === 'S';

}

while(continuar);

let somaNotas = 0;

for (let i = 0; i < arrayNotas.length; i++){
  somaNotas += arrayNotas[i];
}
  
console.log('Média geral: ' + (somaNotas / quantAluno) )







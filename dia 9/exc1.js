let nome = prompt('qual o seu nome?')
let idade = prompt('Qual a sua idade')
let peso = Number(prompt('Qual o seu peso?'))
let altura = Number(prompt('Qual a sua altura?'))
let profissao = prompt('Qual a sua profissão?')

console.log(
  'Olá ' + nome + ', você tem ' + idade + ' anos, é ' + profissao + ', tem ' + altura + 'M de altura, e pesa ' + peso + 'Kg')

if (idade >= 18) {
  console.log('Está liberado para tomar umas geladas')
} else {
  console.log('Sem geladas para você')
}

let idadeEmAnos = idade - 2023
let idadeEmMeses = idade * 12
let idadeEmDias =  idade * 365 
let idadeEmSemanas = idade * 52.2

console.log('A sua idade em meses é: ' + idadeEmMeses + ' // Semanas: ' + idadeEmSemanas + ' // Dias: ' + idadeEmDias)

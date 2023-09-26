let nome = prompt('Qual o seu nome?')
let idade = parseInt(prompt('Qual a seu idade?'))
let altura = parseFloat(prompt('Qual a sua altura?'))
let peso = parseInt(prompt('Qual o seu peso'))
let anoNascimento = 2023 - idade
let imc = Math.floor(peso / (altura * altura))

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNascimento + ', tem ' + altura + ' de altura, pesa ' + peso + ' seu IMC é ' + imc + ' Kg/m2')


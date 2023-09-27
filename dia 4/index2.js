let nome = prompt('Qual o seu nome?')
let idade = Number(prompt('Qual a sua idade?'))
const carta = prompt('Possui carta de motorista? (sim/não)')
const carro = prompt('Possui carro? (sim/não)')

if(idade < 18 || carta === 'não'){
  console.log(nome + ', você não pode dirigir')
}else if(idade >= 18 && carta === 'sim' && carro === 'não' ){
  console.log(nome + ', você pode dirigir mas não tem um carro')
}else{
  console.log(nome + ', você será o motorista!')
}
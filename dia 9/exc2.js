let idade = Number(prompt('Qual a sua idade?'))
let peso = parseInt(prompt('Qual o seu peso? (em kg)'))
let altura = parseInt(prompt('Qual a sua altura? (em metros)'))
let imc = peso / (altura*altura)
console.log(imc)
if(imc < 0.00185){
  console.log('magreza')
}else if(imc >= 0.00185 && imc < 0.00249){
  console.log('normal')
}else if(imc >= 0.00249 && imc < 0.0030){
  console.log('Sobrepeso')
}else if(imc > 0.0030){
  console.log('Obesidade')
}
anoAtual = 2023
anosNas = anoAtual - idade
anosVividos = anosNas
idadeAtual = 0

for(let anosVividos = anosNas; anosVividos <= anoAtual; anosVividos++){
  console.log(anosVividos + ' - ' + idadeAtual + ' anos de idade')
  idadeAtual++
}
do{
  let continuar = prompt('Deseja continuar? (S/N)')
}while(continuar == 'S')


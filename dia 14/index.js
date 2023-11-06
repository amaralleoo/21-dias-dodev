let nome
let salario

pergunta();
function pergunta() {
  nome = prompt('Insira o nome:')
  salario = parseInt(prompt('Insira o salário:'))

  calculo();
  continuar();
}

function calculo() {
  let aumento = 0;

  if(salario <= 1500){
  aumento = 2.00
 }else if(salario <=2000){
  aumento = 1.15
 }else if(salario <=3000){
  aumento = 1.10
 }else if(salario >=3001){
  aumento = 1.05
 }

 console.log('Colaborador: ' + nome)
 console.log('Salário: R$' + salario)
 console.log('Aumento: ' + aumento + '%')
 console.log('Reajuste: R$' + (salario*aumento))
}

function continuar(){
  let continuar = prompt('Deseja calcular novamente? (s/n)')

  if(continuar == 's'){
    pergunta();
  }else{
    console.log('======== encerrado ========')
  }
}

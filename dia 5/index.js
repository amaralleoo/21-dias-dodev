let num1 = Number(prompt('insira um número'))
let num2 = Number(prompt('Insira outro número'))
let operacao = prompt('Escolha a operação: + - * /')

switch(operacao){
  case '+':
      console.log(num1 + num2)
      break;

  case '-':
      console.log(num1 - num2)
      break;

  case '*':
      console.log(num1 * num2)
      break;
  
  case '/':
      console.log(num1 / num2)
      break;

  default: 
      console.log('Você não inseriu nem uma operação')
      break;
}
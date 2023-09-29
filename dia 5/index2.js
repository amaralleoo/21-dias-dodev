let posto = prompt('O que deseja? Gasolina, Álcool ou Calibrar')

switch(posto){
  case 'Gasolina', 'gasolina':
    let quantGas = parseInt(prompt('Qual o valor desejado?'))
    let litroG = quantGas / 5 
    console.log('Você abasteceu ' + litroG + ' L')
    break;
  
  case 'Álcool', 'álcool', 'Alcool', 'alcool':
    let quantAlc = parseInt(prompt('Qual o valor desejado?'))
    let litroA = quantAlc / 3 
    console.log('Você abasteceu ' + litroA  + ' L' )
    break;

  case 'Calibrar', 'calibrar':
    console.log('pneus calibrados com sucesso')
    break;

  default:
    console.log('Você não informou o que deseja')
    break;
}


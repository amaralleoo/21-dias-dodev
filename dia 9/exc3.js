let confirmar = 'n'
salario = 0
while(confirmar != 's'){
  let nome = prompt('Insira seu nome:')
  let idade = parseInt(prompt('Insira sua idade:'))
  salario = parseFloat(prompt('Insira seu salário:'))
  console.log ('Nome: ' + nome + ' Idade: ' + ' Salário: ' + salario)
  confirmar = prompt('As informações estão corretas? (s/n)')
}
  let aumento = 0.015
  console.log('Previsão salarial dos proximos 10 anos:')
  for(let ano = 1; ano <= 10; ano++){
    salario += salario * aumento
    aumento *= 2
  console.log((2023 + ano) + ' = R$ ' + salario)
  }

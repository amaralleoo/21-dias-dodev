let maiorValorInserido = 0
let somaValoresInseridos = 0
let totalTransacoes = 0
let continuar = false
let saldo = 1000

do{
  const nome = prompt('Qual o seu nome?')
  const cpf = Number(prompt('Qual o seu cpf?'))
  const valor = Number(prompt('insira um valor'))
  const escolha = prompt('Deseja relizar um saque ou deposito? (s/d)')

  if (valor < 0){
    console.log('Valor inválido. A transação não foi realizada')
  }else if(escolha == "s" && valor > saldo){
    console.log('Saldo insuficiente. A transação não foi realizada')
  }else if (escolha == "s"){
    console.log('Olá, ' + nome + ' ' + cpf + ', seu saldo atual é R$' + saldo)
    saldo -= valor
    totalTransacoes++
    somaValoresInseridos += valor

  if(valor > maiorValorInserido){
    maiorValorInserido = valor
  }else if (escolha == "d"){
    valor + saldo
    console.log('Olá, ' + nome + ' ' + cpf + ', seu saldo atual é R$' + saldo)
  }

  console.log('Transação realizada com sucesso. Seu saldo atual é de R$' + saldo + '.') 
  }else{
    console.log('Olá, ' + nome + ' ' + cpf + ', seu saldo atual é R$' + saldo)
    saldo += valor
    totalTransacoes++
    somaValoresInseridos += valor
    if(valor > maiorValorInserido){
      maiorValorInserido = valor
    }
    console.log('Transação realizada com sucesso. Seu saldo atual pe de R$' + saldo)
  }
  const opcao = prompt('Deseja continuar? (1 para continuar, 2 para parar):')
  if(opcao === '1'){
    continuar = true
  }else if (opcao === '2'){
    continuar = false
  }else{
    console.log('Opção inválida. Programa encerrado.')
    continuar = false
  }
}while(continuar)

console.log('Saldo final: R$' + saldo)
console.log('Maior valor inserido: ' + maiorValorInserido)
console.log('Média dos valores inseridos: ' (somaValoresInseridos / totalTransacoes))

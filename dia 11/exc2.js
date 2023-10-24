let modelos = []
let anos = []
let valores = []
let continuar = true
let contador = 0

while(continuar){
  let cadastroModelo = prompt('Insira o modelo:')
  modelos[contador] = cadastroModelo
  let cadastroAno = parseInt(prompt('Insira o ano:'))
  anos[contador] = cadastroAno
  let cadastroValor = parseFloat(prompt('Insira o valor:'))
  valores[contador] = cadastroValor
  contador++

  let parar = prompt('Deseja efutuar outro cadastro? (s/n)')
  if(parar == 'n' || parar == 'N'){
    continuar = false
    }
}

console.log('Carros cadastrados: ')
for(let i = 0; i < modelos.length; i++){
  console.log(modelos[i] + ' - ' + anos[i] + ' -  R$' + valores[i])
}


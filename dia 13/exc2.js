class Carro {
  Nome
  Potencia
  VelocidadeMaxima
  Acelaracao
  distancia
  constructor(Nome, Potencia, VelocidadeMaxima, Acelaracao){
    this.Nome = Nome
    this.Potencia = Potencia
    this.VelocidadeMaxima = VelocidadeMaxima
    this.Acelaracao = Acelaracao
    
  }
  resultado(distancia){
    console.log('Tempo gasto parar percorrer a distancia de ' + distancia + 'm é de: ' + distancia/(this.VelocidadeMaxima / this.Acelaracao) + 's')

    console.log('Modelo: ' + this.Nome)
    console.log('Potência: ' + this.Potencia + ' Cavalos')
    console.log('Velocidade Maxima: ' + this.VelocidadeMaxima + 'Km/h')
    console.log('Aceleração 0 a 100Km/h: ' + this.Acelaracao + 's')
  }
}

let Nome = prompt('Marca do carro:')
let Potencia = parseFloat(prompt('Cavalos de pontência do carro:'))
let VelocidadeMaxima = parseFloat(prompt('Velocidade máxima do carro:'))
let Acelaracao = parseFloat(prompt('Tempo em segundos que o carro leva pra ir de 0 a 100km/h:'))


let carro = new Carro(Nome, Potencia, VelocidadeMaxima, Acelaracao)

let distancia = parseFloat(prompt('Insira uma distância para calcular o tempo gasto para percorre-la:'))

carro.resultado(distancia);

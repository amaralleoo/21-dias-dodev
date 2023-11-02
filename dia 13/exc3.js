class Corrida{
  Nome
  Tipo
  Distancia
  Vencedor
  Participantes
  constructor(Nome, Tipo, Distancia){
    this.Nome = Nome
    this.Tipo = Tipo
    this.Distancia = Distancia
    this.Vencedor = ''
    this.Participantes = []

  }
  resultado(){
    let menortempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
    let vencedor = this.Participantes[0]

    for(let index = 1; index < thios.Participantes.length; index++){
      let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
      if(tempor < menortempo){
        menortempo = tempo
        vencedor = this.Participantes[index]
      }
    }
    return this.Vencedor - vencedor
  }

  ExibirVencedor(){
    alert('O vencedor é: ' + this.Vencedor.Nome)
  }
}

let corrida = new Corrida('Monza', 'Fórmula  1', 60000)

corrida.Participantes[0] = new Carro('Kicks', 120 , 160 ,5)
corrida.Participantes[1] = new Carro('Kicks', 210 , 200 ,9)
corrida.Participantes[2] = new Carro('Peugeot 206', 300 , 220 ,10)

corrida.DefinirVencedor()
corrida.ExibirVencedor()

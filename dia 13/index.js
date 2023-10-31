class Computador{
  tipo 
  processador 
  video
  armazenamento
  memoriaRam
  ssd
  constructor(tipo, processador, video, armazenamento, memoriaRam){
    this.tipo = tipo
    this.processador = processador
    this.video = video
    this.armazenamento = armazenamento
    this.memoriaRam = memoriaRam
  }
  exibir(){
    console.log('Tipo do computador: ' + this.tipo + ', Modelo processador: ' + this.processador + ', Tipo de video: ' + this.video + ', Tamanho do armazenamento: ' + this.armazenamento + ', Tamanho Memoria Ram: ' + this.memoriaRam + ', SSD: ' + this.temSSD)
  }
}

let tipo = prompt('Qual o tipo do seu computador? (desktop ou notebook)')
let processador = prompt('modelo processador:')
let video = prompt('Qual o tipo de video? (Integrado ou dedicado)')
let armazenamento = prompt('Tamanho armazenamento:')
let memoriaRam = prompt('Tamanho memoria ram:')

let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam)

let temSSD = prompt('Tem SSD? (s/n)')

if(temSSD == "s"){
  computador.temSSD = temSSD
}else{
  temSSD = false
}

computador.exibir();



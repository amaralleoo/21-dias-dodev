class Hotel {
  id
  Nome 
  Categoria
  Endereco
  Telefone
  constructor(id, nome, categoria, endereco, telefone){
    this.Id = id
    this.Nome = nome
    this.Categoria = categoria
    this.Endereco = endereco
    this.Telefone = telefone
  }
}

class Reserva{
  Id
  IdHotel
  Responsavel
  DiaEntrada
  DiaSaida
  constructor(id, idHotel, responsavel, diaEntrada, diaSaida){
    this.Id = id
    this.IdHotel = idHotel 
    this.Responsavel = responsavel
    this.DiaEntrada = diaEntrada
    this.DiaSaida = diaSaida
  }
}

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

function cadastroHotel() {
  let nome = prompt('Nome do Hotel:')
  let categoria = parseInt(prompt('Insira a categoria do hotel:'))
  let endereco = prompt('Insira o endereço do hotel:')
  let telefone = prompt('Telefone do hotel:')
  let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
  idHotel++
  hoteis.push(hotel) 
}

function cadastroReserva() {
  let idHotel
  let existe = false
  do {
    idHotel = parseInt(prompt('DIgite o id do hotel:'))
    for (let i = 0; i < hoteis.length; i++){
      if (idHotel == hoteis[i].Id){
        i = hoteis.length
        existe = true
      }else if (i = hoteis.length - 1){
        console.log('id de hotel não cadastrado')
      }
    }
  } while(!existe)
  let nome = prompt('Nome do responsável:')
  let diaEntrada = parseInt(prompt('Dia de entrada'))
  let diaSaida 
  do{
    diaSaida = parseInt(prompt('Dia de saída:'))
    if(diaSaida < diaEntrada){
      console.log('o dia de saida deve ser menor que o dia de entrada')
    }
  } while(diaSaida < diaEntrada)
  
  let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
  idReserva++
  reservas.push(reserva)
}

function procurarReserva(idHotel) {
  reservas.forEach(reserva => {
    if(idHotel == reserva.IdHotel){
    let i = idHotel - 1
    console.log('Hotel:' + hoteis[i].Nome)
    console.log('Responsável:' + reserva.Responsavel)
    console.log('Dia de entrada:' + reserva.DiaEntrada)
    console.log('Dia de saída:' + reserva.DiaSaida)
  }
  })
}

function procurarHotel(idReserva) {
  let idHotel = reservas[idReserva - 1].IdHotel
  console.log('Hotel:' + hoteis[idHotel - 1].Nome)
  console.log('Endereço:' + hoteis[idHotel - 1].Endereco)
  console.log('Dia de entrada:' + reservas[idReserva - 1].diaEntrada)
  console.log('Dia de saída:' + reservas[idReserva - 1].diaSaida)
}

function procurarPeloNome(nome) {
  for(let i = 0; i < reservas.length; i++){
    if(nome == reservas[i].Responsavel){
      console.log('id da Reserva: ' + reservas[i].Id)
      console.log('Hotel: ' + hoteis[(reservas[i].IdHotel) -1].NOme) 
    }
  }
}

function procurarCategoria(categoria) {
  let hoteisProcurados = []
  for(let i = 0; i < hoteis.length; i++){
    if(categoria == hoteis[i].Categoria){
      hoteisProcutados.push(hoteis[i].Nome)
    }
  }
  return hoteisProcurados
}

function telefone(idHotel, telefone){
  hoteis[idHotel - 1].Telefone = telefone
  console.log('Número de telefone atualizado!')
}

let continuar = true

do{
  let opcao = prompt('Escolha uma opção: 1- Cadastrar hotel \\ 2- Cadastrar Reserva \\ 3- Procurar reserva pelo hotel' + ' \\ 4- Procurar hotel pela reserva \\ 5- Procurar Reserva pelo responsável \\ 6- Procurar hoteis por categoria' + ' \\ 7- Atualizar telefone de um hotel \\ 8- encerrar o programa')


  switch (opcao)  {
    case '1':
      cadastroHotel()
      break;
    case '2':
      cadastroReserva()
      break;
    case '3':
        procurarHotel((prompt('ID do hotel:')))
        break;
    case '4':
      procurarReserva((prompt('ID da reserva:')))
      break;
    case '5':
      procurarPeloNome((prompt('Nome do responsável:')))
      break;  
    case '6':
      let hoteisProcurados = procurarCategoria(paserInt(prompt('Categoria que deseja procurar:')))
      console.log(hoteisProcurados)
      break;
    case '7':
      let idHotel = parseInt(prompt('ID do hotel que deseja atualizar:'))
      let telefone = prompt('Novo telefone:') 
      telefone(idHotel, telefone)
      break;
    case '8':
      console.log('Programa encerrado')
      break;
    default:
      console.log('Opção inválida')
      break;
  }
} while (continuar)
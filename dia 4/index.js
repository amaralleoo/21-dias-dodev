let fome = prompt('Tem fome? (sim/não)')
let dinheiro = prompt('Tem dinheiro? (sim/não)')
let restaurante = prompt('Restaurante está aberto? (sim/não)')

if (fome === 'não' || dinheiro === 'não'){
  console.log('Hoje a janta será em casa')
}else if (fome === 'sim' && dinheiro === 'sim' && restaurante === 'não'){
  console.log('Peça um delivery')
}
if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'sim'){
  console.log('hoje o jantar será no seu restaurante preferido!')
}
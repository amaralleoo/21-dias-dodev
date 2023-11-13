let nomes = []
let senhas = []

let desejo = prompt('Se deseja Cadastrar digite: 1, login: 2, excluir um cadastro ou encerrar o programa: 3')

if(desejo === '1'){
  cadastro();
}else if(desejo === '2'){
  login();
}else if(desejo === '3'){
  excluirCadastro();
}else{
  console.log('Opção inválida!')
}

function cadastro (){
  

  let user = prompt('Insira o seu nome:')
  let password = prompt('Insira uma senha:')

  nomes.push (user)
  senhas.push (password) 

  console.log('Cadastro realizado!')

  let continuar = prompt('se desejar fazer login digite: 1')
  if(continuar == '1'){
    login();
  }
}

function login (){
  let entrar = prompt('login:')
  let pedirSenha = prompt('Senha:')

  let index = nomes.indexOf(entrar)

  if(index !== -1 && senhas[index] === pedirSenha){
    console.log('Login feito com sucesso!')
  }else{
    console.log('Nome de usuário ou senha incorreto!')
  }


    excluirCadastro();
  

}

function excluirCadastro(){
  let escolha = prompt('se deseja excluir cadastro digite: 1 caso queira encerrar o programa: 2')
  let index;

  if(escolha === '1'){
    let excluir = prompt('Insira o nome de usuaria a ser excluido:')
    index = nomes.indexOf(excluir)
  }else if(index !== -1){
    nomes.splice(index, 1)
    senhas.splice(index, 1)
  }else if(escolha == '2'){
    console.log('Programa encerrado!')
  }else{
    console.log('Opção inválida!')
  }
}
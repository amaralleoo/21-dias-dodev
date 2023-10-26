let nomes = [];
let senhas = [];
let contador = 0;
let solicitacao;

do {
  solicitacao = prompt('O que deseja? Cadastrar, login ou excluir cadastro');

  if (solicitacao.toLowerCase() === 'cadastrar') {
    let pedirNome = prompt('Insira um nome de usuário:');
    let pedirSenha = prompt('Insira uma senha:');
    nomes.push(pedirNome);
    senhas.push(pedirSenha);
    contador++;
  } else if (solicitacao.toLowerCase() === 'login') {
    let solicitarNome = prompt('Usuário:');
    let solicitarSenha = prompt('Senha:');
    let verificarNome = nomes.indexOf(solicitarNome);

    if (verificarNome !== -1 && senhas[verificarNome] === solicitarSenha) {
      alert('Login bem sucedido');
    } else {
      alert('Nome de usuário ou senha inválidos');
    }
  } else if (solicitacao.toLowerCase() === 'excluir cadastro') {
    let excluirNome = prompt('Nome de usuário:');
    let procurarNome = nomes.indexOf(excluirNome);

    if (procurarNome !== -1) {
      nomes.splice(procurarNome, 1);
      senhas.splice(procurarNome, 1);
      alert('Cadastro excluído com sucesso.');

    
      nomes = nomes.filter(Boolean);
      senhas = senhas.filter(Boolean);
    } else {
      alert('Nome de usuário não encontrado.');
    }
  } else {
    alert('Opção inválida.');
  }
} while (solicitacao.toLowerCase() !== 'sair');

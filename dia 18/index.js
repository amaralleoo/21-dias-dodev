class Livro {
  Titulo
  Autor
  Editora
  AnoDePublicacao
  Disponibilidade = true
  constructor(titulo, autor, editora, anoDePublicacao, disponibilidade){
    this.Titulo = titulo
    this.Autor = autor
    this.Editora = editora
    this.AnoDePublicacao = anoDePublicacao
    this.Disponibilidade = disponibilidade
  }
}

let livros = []

livros.push(new Livro('livro1', 'Julia', 'editora A', 2001))
livros.push(new Livro('livro2', 'Cristiano', 'editora F', 1997))
livros.push(new Livro('livro3', 'Ronaldo', 'editora F', 2010))
livros.push(new Livro('livro4', 'Leonardo', 'editora A', 2005))
livros.push(new Livro('livro5', 'Xamã', 'editora C', 2020))

class Biblioteca{
  Nome
  Endereco
  Telefone
  AcervoLivros = []
  constructor(nome, telefone, endereco, acervo){
    this.Nome = nome
    this.Telefone = telefone
    this.Endereco = endereco
    this.AcervoLivros = acervo
  }

  buscarLivros(titulo){
    this.AcervoLivros.forEach(livro =>{
      if(livro.Titulo == titulo){
        console.log(livro)
      }
    })
  }

  emprestarLivro(titulo){
    let emprestado = false
    this.AcervoLivros.forEach(livro => {
      if(livro.Titulo == titulo) {
        if(livro.Disponibilidade == true){
          livro.Disponibilidade = false
          emprestado = true
        }
      }
    })
    if(emprestado) {
      return true
    }else {
      return false
    }
  }
    devolverLivro(titulo){
      livros.forEach(livro => {
        if(livro.Titulo == titulo){
          livro.Disponibilidade = true
          console.log('livro devolvido')
        }
      })
    }

}

let biblioteca = new Biblioteca('Biblioteca DoDev', '123456', 'Rua 2')

biblioteca.buscarLivros('livro2')
biblioteca.emprestarLivro('livro1')
biblioteca.devolverLivro('livro1')
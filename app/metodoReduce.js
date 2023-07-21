function calculaValorTotal(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2) //0 indica que o índice começará no 0
}
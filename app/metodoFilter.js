const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) //adiciona um escutador de evento em cada botão

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) //pega o botao que foi clicado
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() :  filtrarPorCategoria(categoria) //livros é uma variável global
    exibirLivros(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calculaValorTotal(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveis(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal){
    elementoValorTotalDosLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
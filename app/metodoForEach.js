const elemento = document.getElementById('livros')
const elementoValorTotalDosLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')
function exibirLivros(listaDeLivros){
    elemento.innerHTML = '' //deixa vazio o espaço para depois exibir só a lista de livros recebida
    elementoValorTotalDosLivrosDisponiveis.innerHTML = '' //some com o elemento
    listaDeLivros.forEach(livro => {
        //let disponibilidade = verificarDisponibilidade(livro)
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' //operadores ternarios para não ter que usar a função que verifica a disponibilidade
        elemento.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
           ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
        </div>`
    })
}

/*function verificarDisponibilidade(livro) {
    if (livro.quantidade > 0) {
        return 'livro__imagens'
    }else {
        return 'livro__imagens indisponivel'
    }
}*/

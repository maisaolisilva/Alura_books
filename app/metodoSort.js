let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco) //a - b ordena do menor para o maior, b-a ordena do maior para o menor
    exibirLivros(livrosOrdenados)
}
let btnOrdenarPropReco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPropReco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}
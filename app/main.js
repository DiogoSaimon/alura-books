let livros = [];
const endpointDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";


getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const response = await fetch(endpointDaAPI);
  livros = await response.json();
  let livrosComDescontos = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDescontos);
}



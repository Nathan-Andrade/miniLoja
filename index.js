const items = [
  {
    id: 0,
    nome: 'Pão de Queijo',
    img: 'paoDeQueijo.jpg',
    quantidade: 0
  },
  {
    id: 1,
    nome: 'Bolinho de Queijo',
    img: 'paoDeQueijo.jpg',
    quantidade: 0
  },
  {
    id: 2,
    nome: 'Pastel Queijo',
    img: 'paoDeQueijo.jpg',
    quantidade: 0
  },
]

function initStore() {
  var containerProdutos = document.getElementById('produtos')
  items.map(() => {
    containerProdutos.innerHTML += `
      <div class="produtos-single">
        <img src="`+val.img+`" />
        <p>`+val.nome+`</p>
        <a key="`+val.id+`" href="#">Adicionar ao Carrinho</a>
      </div>
    `;
  })
}
initStore();
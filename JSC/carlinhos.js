function AddCarrinho(nomeProduto, qtd1, valor, urlImagemProduto, tamanho) {
    let carrinho = getCarrinho();

    alert(tamanho)

    let produto = {
      "nome": nomeProduto, 
      "quantidade": qtd1,
      "valor": valor, 
      "imagem": urlImagemProduto,
      "tamanho": tamanho,
     
    };
    
    carrinho.push(produto);
	localStorage.setItem("carrinho" , JSON.stringify(carrinho));
	alert("Produto adicionado ao carrinho!");
}

function getCarrinho() {
    let carrinho = localStorage.getItem('carrinho');
    if(carrinho){
      carrinho = JSON.parse(carrinho);
    } else {
      carrinho = [];
    }

    return carrinho;
}
function excluirDoCarrinho(nomeProduto){
    let carrinho = getCarrinho();

    for(let i = 0; i < carrinho.length; i++){
        if(carrinho[i].nome === nomeProduto){
            carrinho.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("carrinho" , JSON.stringify(carrinho));
    window.location.reload();
}

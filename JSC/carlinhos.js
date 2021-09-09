function AddCarrinho(nomeProduto, qtd1, valor, urlImagemProduto, tamanho) {
 
    let carrinho = getCarrinho();

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

function Comprar(){
  if(tamanho.value == ''){
    alert("Escolha o tamanho!")
  }else{
    alert("Estamos preparando tudo para sua compra!")
    window.location.href="pagamento.html"
  }
  
}

let nomePag = document.getElementById('namePag').value;
let sobrenome = document.getElementById('lastName').value;
let emailPag = document.getElementById('emailPag').value;
let cpf = document.getElementById('cpf').value;
let cep = document.getElementById('cep').value;
let endereco = document.getElementById('address').value;
let bairro = document.getElementById('bairro').value;
let cidade = document.getElementById('city').value;
let estado = document.getElementById('state').value;

let nomeCartao = document.getElementById('nameCard')
let numeroCartao = document.getElementById('numberCard')
let cvv = document.getElementById('cvv')
let validadeMes = document.getElementById('mes')
let validadeAno = document.getElementById('ano')


function Confirmar(){
  if(nomePag.value == '' || sobrenome.value == '' || emailPag.value == '' || 
    cpf.value == '' || cep.value == '' || endereco.value == '' || bairro.value == '' ||
      cidade.value == '' || estado.value == '' || nomeCartao.value == '' || numeroCartao.value == '' ||
        cvv.value == '' || validadeMes.value == 'MM' || validadeAno == 'AA'){

          alert("Preencha os campos corretamente!")
        }else{
          alert("Obrigado pela sua compra!")
          window.location.href='./index.html'
        }
}
// Armazena os valores dos inputs da tela de Cadastro
let nomeProduto = document.getElementById("name")
let precoProduto = document.getElementById("preco")
let descricaoProduto = document.getElementById("descricao")
let imagemProduto = document.getElementById("imagem")


// Armazena os valores dos inputs da tela de Login
let nomeLogin = document.getElementById("userLog")
let senhaLogin = document.getElementById("senhaLog")

// Armazena o nome do input de pesquisa
let namePesquisar = document.getElementById("namePesquisa")
let precoPesquisar = document.getElementById("precoPesquisa")
let descricaoPesquisar = document.getElementById("descricaoPesquisa")
let imagemPesquisar = document.getElementById("imagemPesquisa")

// Armazena o nome do usuário digitado no input de exclusão 
let nameExcluir = document.getElementById("excluir")

// Cria uma variável para armazenar a posição dos dados a serem pesquisados 
let posicaoPesquisar

// Cria vetores vazios para armazenamento temporário dos dados
let names = []
let precos = []
let descricoes = []
let imagens = []

function Cadastrar(){


  // Pega valores do LocalStorage (se tiver) e armazena
    names = JSON.parse(localStorage.getItem("nome_produto"));
    precos = JSON.parse(localStorage.getItem("preco_produto"));
    descricoes = JSON.parse(localStorage.getItem("descricao_produto"));
    imagens = JSON.parse(localStorage.getItem("imagem_produto"))

  // Compara se o que veio do LocalStorage é vazio  
  if (names == null) {

    // Se estiver vazio, recria os vetores temporários
    names = []
    precos = []
    descricoes = []
    imagens = []

    // Adiciona os valores dos inputs no início dos vetores
    names.push(nomeProduto.value)
    precos.push(precoProduto.value)
    descricoes.push(descricaoProduto.value)
    imagens.push(imagemProduto.value)

    // Joga para o LocalStorage novamente
    localStorage.setItem("nome_produto", JSON.stringify(names))
    localStorage.setItem("preco_produto", JSON.stringify(precos))
    localStorage.setItem("descricao_produto", JSON.stringify(descricoes))
    localStorage.setItem("imagem_produto" , JSON.stringify(imagens))
  
  } else {

    // Se não estiver vazio
    // Apenas adiciona os valores dos inputs após os valores que já tem nos vetores
    names.push(nameProduto.value)
    precos.push(precoProduto.value)
    descricao.push(descricaoProduto.value)
    imagens.push(imagemProduto.value)

    // Joga para o LocalStorage novamente
    localStorage.setItem("nome_produto", JSON.stringify(names))
    localStorage.setItem("precoProduto", JSON.stringify(precos))
    localStorage.setItem("descricaoProduto", JSON.stringify(descricoes))
    localStorage.setItem("imagemProduto", JSON.stringify(imagens))

  }

    // Mostra mensagem cadastro efetuado e carrega a página de login
    alert("Cadastro do novo produto foi um sucesso!");
    // Pula para a página de Login
    
    
  }
  function Pesquisar(){

    // Pega valores do LocalStorage (se tiver) e armazena
    names = JSON.parse(localStorage.getItem("nome_produto"));
    precos = JSON.parse(localStorage.getItem("preco_produto"));
    descricoes = JSON.parse(localStorage.getItem("descricao_produto"));
    imagens = JSON.parse(localStorage.getItem("imagem_produto"))

    // Cria uma variável ou flag para indicar que encontrou
    let encontrou = 0

    // Realiza um loop do tamanho dos vetores
    for(i=0; i < names.length; i++){

      // Compara o valor do input de exclusão com o valor da posição atual do vetor
      if(namePesquisar.value == names[i]){

        encontrou = 1
        posicaoPesquisar = i
        alert('Produto encontrado')
      }
    
    }

    if (encontrou == 1){

        // Pega os valores da posição onde foi encontrado e joga pra os inputs
        document.getElementById("namePesquisa").value = names[posicaoPesquisar]
        document.getElementById("precoPesquisa").value = precos[posicaoPesquisar] 
        document.getElementById("descricaoPesquisa").value = descricoes[posicaoPesquisar] 
        document.getElementById("imagemPesquisa").value = imagens[posicaoPesquisar] 


    }else{

        // Mostra mensagem de usuário inexistente
        alert("Produto não encontrado!")
        // Limpa dados do input excluir
        //document.getElementById("userPequisa").value = ''

    }  
    
}
function Excluir(){

    // Pega valores do LocalStorage (se tiver) e armazena
    names = JSON.parse(localStorage.getItem("nome_produto"));
    precos = JSON.parse(localStorage.getItem("preco_produto"));
    descricoes = JSON.parse(localStorage.getItem("descricao_produto"));
    imagens = JSON.parse(localStorage.getItem("imagem_produto"));


   // Cria uma variável para armazenar a posição dos dados a serem excluídos 
   let posicaoExcluir

   // Realiza um loop do tamanho dos vetores
   for(i=0; i < names.length; i++){

     // Compara o valor do input de exclusão com o valor da posição atual do vetor
     if(nameExcluir.value == names[i]){

       // Se existir um valor igual, armazena a posição
       posicaoExcluir = i

       // Utiliza a posição armazenada para excluir os dados
       names.splice(posicaoExcluir, 1)
       precos.splice(posicaoExcluir, 1)
       descricoes.splice(posicaoExcluir, 1)
       imagens.splice(posicaoExcluir, 1)


       // Mostra mensagem de dados excluídos
       alert("Produto excluído!")

       // Joga para o LocalStorage novamente
       localStorage.setItem("nome_produto", JSON.stringify(names))
       localStorage.setItem("preco_produto", JSON.stringify(precos))
       localStorage.setItem("descricao_produto", JSON.stringify(descricoes))
       localStorage.setItem("imagem_produto", JSON.stringify(imagens))


     }

   }

   // Limpa dados do input excluir
   document.getElementById("excluir").value = ''

}
function Atualizar(){

    // Remove os dados da posição encontrada e joga os novos dados
    names.splice(posicaoPesquisar, 1, namePesquisar.value)
    precos.splice(posicaoPesquisar, 1, precoPesquisar.value)
    descricoes.splice(posicaoPesquisar, 1, descricaoPesquisar.value)
    imagens.splice(posicaoPesquisar, 1, imagemPesquisar.value)

        
    // Joga para o LocalStorage o vetor atualizado
    localStorage.setItem("nome_produto", JSON.stringify(names))
    localStorage.setItem("preco_produto", JSON.stringify(precos))
    localStorage.setItem("descricao_produto", JSON.stringify(descricoes))
    localStorage.setItem("imagem_produto", JSON.stringify(imagens))


    // Mensagem de dados atualizados
    alert("Dados atualizados!")
    window.location.reload();

}
// Armazena os valores dos inputs da tela de Cadastro
let nomeCadastro = document.getElementById("user")
let senhaCadastro = document.getElementById("pass")
let nameCadastro = document.getElementById("name")
let confirmaCadastro = document.getElementById("confirm")

// Armazena os valores dos inputs da tela de Login
let nomeLogin = document.getElementById("userLog")
let senhaLogin = document.getElementById("senhaLog")

// Armazena o nome do input de pesquisa
let nomePesquisar = document.getElementById("userPesquisa")
let senhaPesquisar = document.getElementById("passPesquisa")

// Armazena o nome do usuário digitado no input de exclusão 
let nomeExcluir = document.getElementById("excluir")

// Cria uma variável para armazenar a posição dos dados a serem pesquisados 
let posicaoPesquisar

// Cria vetores vazios para armazenamento temporário dos dados
let nomes = []
let senhas = []


function Cadastrar(){

  if(nomeCadastro.value == '' || nameCadastro.value == '' || senhaCadastro.value == '' || confirmaCadastro == ''){
    alert("Preencha os campos corretamente!")
  }else if(senhaCadastro.value != confirmaCadastro.value){
    alert("Senhas diferentes!")
  }else{
    
  // Pega valores do LocalStorage (se tiver) e armazena
    nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"));
    names = JSON.parse(localStorage.getItem("cadastro_nome"));
    

  // Compara se o que veio do LocalStorage é vazio  
  if (nomes == null) {

    // Se estiver vazio, recria os vetores temporários
    nomes = []
    senhas = []
    names = []
    

    // Adiciona os valores dos inputs no início dos vetores
    nomes.push(nomeCadastro.value)
    senhas.push(senhaCadastro.value)
    names.push(nameCadastro.value)
    

    // Joga para o LocalStorage novamente
    localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
    localStorage.setItem("cadastro_senha", JSON.stringify(senhas))
    localStorage.setItem("cadastro_nome", JSON.stringify(names))
    
  
  } else {

    // Se não estiver vazio
    // Apenas adiciona os valores dos inputs após os valores que já tem nos vetores
    nomes.push(nomeCadastro.value)
    senhas.push(senhaCadastro.value)
    nomes.push(nameCadastro.value)
    

    // Joga para o LocalStorage novamente
    localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
    localStorage.setItem("cadastro_senha", JSON.stringify(senhas))
    localStorage.setItem("cadastro_nome", JSON.stringify(names))
    

  }

    // Mostra mensagem cadastro efetuado e carrega a página de login
    alert("Seu cadastro foi efetuado com sucesso!");
    // Pula para a página de Login
    window.location.href="login.html"
    
  }
}
function Logar(){

  

  

  

    // Pega valores do LocalStorage (se tiver) e armazena
    nomes = JSON.parse(localStorage.getItem("cadastro_usuario"))
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"))

    // Cria uma variável ou flag para indicar que logou
    let logou = 0

    // Realiza um loop do tamanho dos vetores
    for(i=0; i < nomes.length; i++){

        // Se o nome e senha no input do login forem iguais ao nome e senha da vez no loop
        if(nomeLogin.value == nomes[i] && senhaLogin.value == senhas[i]){

	          // Flag "logou" ativa	
	          logou = 1
	
	      }

    }
   
    if (logou == 1){

          // Mostra mensagem de login efetuado
          alert("Login efetuado!")
          // Pula para a página Principal

          if(nomeLogin.value == 'matheus@gmail.com')
            window.location.href="admin.html";
          else
            window.location.href="index.html"

    }else{

          // Senão, mostra mensagem de login falhou
          alert("Email ou senha inválidos!")

    }   

}


function Listar(){

    // Pega valores do LocalStorage (se tiver) e armazena
    nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

    // Cria uma variável de string vazia para armazenar os dados da lista
    let lista = ''

    // Realiza um loop do tamanho dos vetores
    for(i=0; i < nomes.length; i++){

      // Armazena na variável lista, os dados dos vetores 
      lista = lista + nomes[i] + " - " + senhas[i] + "<br>"

    }

    // Mostra a lista na div centro
    document.getElementById("baixo").innerHTML = lista

}

function Excluir(){

     // Pega valores do LocalStorage (se tiver) e armazena
     nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
     senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

    // Cria uma variável para armazenar a posição dos dados a serem excluídos 
    let posicaoExcluir

    // Realiza um loop do tamanho dos vetores
    for(i=0; i < nomes.length; i++){

      // Compara o valor do input de exclusão com o valor da posição atual do vetor
      if(nomeExcluir.value == nomes[i]){

        // Se existir um valor igual, armazena a posição
        posicaoExcluir = i

        // Utiliza a posição armazenada para excluir os dados
        nomes.splice(posicaoExcluir, 1)
        senhas.splice(posicaoExcluir, 1)

        // Mostra mensagem de dados excluídos
        alert("Usuário excluído!")

        // Joga para o LocalStorage novamente
        localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
        localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

      }

    }

    // Limpa dados do input excluir
    document.getElementById("excluir").value = ''

}

function Pesquisar(){

    // Pega valores do LocalStorage (se tiver) e armazena
    nomes = JSON.parse(localStorage.getItem("cadastro_usuario"));
    senhas = JSON.parse(localStorage.getItem("cadastro_senha"));

    // Cria uma variável ou flag para indicar que encontrou
    let encontrou = 0

    // Realiza um loop do tamanho dos vetores
    for(i=0; i < nomes.length; i++){

      // Compara o valor do input de exclusão com o valor da posição atual do vetor
      if(nomePesquisar.value == nomes[i]){

        encontrou = 1
        posicaoPesquisar = i
      
      }
    
    }

    if (encontrou == 1){

        // Pega os valores da posição onde foi encontrado e joga pra os inputs
        document.getElementById("userPesquisa").value = nomes[posicaoPesquisar]
        document.getElementById("passPesquisa").value = senhas[posicaoPesquisar] 

    }else{

        // Mostra mensagem de usuário inexistente
        alert("Usuário não encontrado!")
        // Limpa dados do input excluir
        //document.getElementById("userPequisa").value = ''

    }  
    
}

function Atualizar(){

    // Remove os dados da posição encontrada e joga os novos dados
    nomes.splice(posicaoPesquisar, 1, nomePesquisar.value)
    senhas.splice(posicaoPesquisar, 1, senhaPesquisar.value)
        
    // Joga para o LocalStorage o vetor atualizado
    localStorage.setItem("cadastro_usuario", JSON.stringify(nomes))
    localStorage.setItem("cadastro_senha", JSON.stringify(senhas))

    // Mensagem de dados atualizados
    alert("Dados atualizados!")

}
let container = document.querySelector('.input-containerr');
let input = document.querySelector('.input-fieldd');
let icon = document.querySelector('.img');
 
icon.addEventListener('click', function(){
    container.classList.toggle('visible');
    if(container.classList.contains('visible')){
        icon.src = 'img/eye-off.svg';
        input.type = 'text';
    }else{
        icon.src = 'img/eye.svg';
        input.type = 'password';
    }
});

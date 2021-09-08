var btn = document.querySelector('#divdiv')
var divEmail = document.querySelector('.divEmail');

btn .addEventListener('click', function(){

if(divEmail.style.display ==='block'){
    divEmail.style.display = 'none';
}else{
    divEmail.style.display = 'block';
}



});

var btn = document.querySelector('#divdivS')
var divSenha = document.querySelector('.divSenha');

btn .addEventListener('click', function(){

if(divSenha.style.display ==='block'){
    divSenha.style.display = 'none';
}else{
    divSenha.style.display = 'block';
}



});

var btn = document.querySelector('#divdivN')
var divNumero = document.querySelector('.divNumero');

btn .addEventListener('click', function(){

if(divNumero.style.display ==='block'){
    divNumero.style.display = 'none';
}else{
    divNumero.style.display = 'block';
}



});

var btn = document.querySelector('#divdivM')
var divMoradia = document.querySelector('.divMoradia');

btn .addEventListener('click', function(){

if(divMoradia.style.display ==='block'){
    divMoradia.style.display = 'none';
}else{
    divMoradia.style.display = 'block';
}



});
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
        alert('Autorizado para alterar sua informações')
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
function CarregarUser(){
    let users = JSON.parse(localStorage.getItem("cadastro_usuario"))
    let usersSenha = JSON.parse(localStorage.getItem("cadastro_senha"))
    let userLogado = localStorage.getItem('userLogado')
    
    users.forEach((u, i) => {
      if(u == userLogado){
        document.getElementById('userPesquisa').value = users[i ]
        document.getElementById('passPesquisa').value = usersSenha[i]
      }
    });
  }
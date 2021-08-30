let nomeSuporte = document.getElementById("user");
let emailSuporte = document.getElementById("pass");
let mensagemSuporte = document.getElementById("msn");

let nomes = []
let emails = []
let mensagens = []

function Suporte(){
    nomes = JSON.parse(localStorage.getItem("nome_suporte"));
    emails = JSON.parse(localStorage.getItem("email_suporte"));
    mensagens = JSON.parse(localStorage.getItem("mensagem_suporte"));

      if(nomeSuporte.value == '' || emailSuporte.value == '' || mensagemSuporte.value == '' ){
        alert("Preencha os campos corretamente!")
      }else{

      if (nomes == null) {

        // Se estiver vazio, recria os vetores temporários
        nomes = []
        emails = []
        mensagens = []
    
        // Adiciona os valores dos inputs no início dos vetores
        nomes.push(nomeSuporte.value)
        emails.push(emailSuporte.value)
        mensagens.push(mensagemSuporte.value)

    
        // Joga para o LocalStorage novamente
        localStorage.setItem("nome_suporte", JSON.stringify(nomes))
        localStorage.setItem("email_suporte", JSON.stringify(emails))
        localStorage.setItem("mensagem_suporte", JSON.stringify(mensagens))
      
      } else {
    
        // Se não estiver vazio
        // Apenas adiciona os valores dos inputs após os valores que já tem nos vetores
        nomes.push(nomeSuporte.value)
        emails.push(emailSuporte.value)
        mensagens.push(mensagemSuporte.value)
    
        // Joga para o LocalStorage novamente
        localStorage.setItem("nome_suporte", JSON.stringify(nomes))
        localStorage.setItem("email_suporte", JSON.stringify(emails))
        localStorage.setItem("mensagem_suporte", JSON.stringify(mensagens))
    
      }
    
        // Mostra mensagem cadastro efetuado e carrega a página de login
        alert("Agradeçemos o seu contato!");
        // Pula para a página de Login
        window.location.href="index.html"
    
    }
  }

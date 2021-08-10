// Javascript do Cadastro / login
 
 
localStorage.login;
localStorage.email;
localStorage.senha;
localStorage.confirme;
 
localStorage.loginArray;
localStorage.senhaArray;
 
 
var auxEmailArray = new Array();
var auxSenhaArray = new Array();
 
function cadastrar(){
 var email = document.getElementById('email').value;
 var senha = document.getElementById('senha').value;
 var confirme = document.getElementById('confirme').value;
  
 localStorage.setItem("email", email);//localStorage.login = l;
//   localStorage.setItem("email", s);//localStorage.senha = s;
 localStorage.setItem("senha", senha);//localStorage.senha = s;
//   localStorage.setItem("confirme sua senha", f);//localStorage.senha = s;
 
//   auxEmailArray.push(email);
//   auxSenhaArray.push(senha);
 
// //   //localStorage.loginArray = auxLoginArray;
//   localStorage.setItem("emailArray", auxEmailArray);
// //   //localStorage.senhaArray = auxSenhaArray;
//   localStorage.setItem("senhaArray", auxSenhaArray);
 
 //console.log(localStorage.loginArray, localStorage.senhaArray);
 alert("Usuário cadastrado com sucesso\nEmail: "+localStorage.getItem("email") )
}
 
function logar(){
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
 
  alert(email, senha)
  // if(l_inf == localStorage.login && s_inf == localStorage.senha){
  // alert("Math");
  // }
 
  //var l = localStorage.loginArray.split(",");
  var email = localStorage.getItem("loginArray").split(",");
  //var s = localStorage.senhaArray.split(",");
  var senha = localStorage.getItem("senhaArray").split(",");
  
  //console.log(l,s);
  //alert("Login digitado: "+ l_inf + "\nSenha digitada: " + s_inf);
  var logado = false;
  for(var i=0; i<email.length; i++){
  if(email == email[i] && senha == senha[i]){
    alert("Usuário e senha existem no sistema");
    logado = true;
    window.open('suporte.html','janela');
  }
  }
  if(logado == false){
  alert("Usuário ou Senha não existem no sistema!");
  }
  //console.log("Login Storage:\n"+localStorage.loginArray, "\nSenhas Storage:\n"+localStorage.senhaArray);
}

// ---------- FUNÇÕES GERAIS -------------- //
function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  //Função Toggle é como um interruptor  - se estiver ligado ele vai desligar e vice-versa
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });
  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.length < 3){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Seu username precisa ter 3 ou mais caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper)
    inputsCorretos.username = false  // Necessário atualização para envio ou não do formulario // Linha 120 do codigo

  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username = true    // Necessário atualização para envio ou não do formulario // Linha 120 do codigo
  }
})

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// Validar valor do input
emailInput.addEventListener("change", (e)=> {
  let valor = e.target.value

  if(valor.includes("@") && valor.includes(".com")){
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true  // Necessário atualização para envio ou não do formulario // Linha 120 do codigo

  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false  // Necessário atualização para envio ou não do formulario // Linha 120 do codigo

  }
})


// ---------- VALIDAÇÃO SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

// console.log(senhaLabel) - confirmar se está aparecendo no console(terminal)
togglePopup(senhaInput,senhaLabel)


senhaInput.addEventListener("blur", (e)=>{
let valor = e.target.value

  if(valor==""){
    senhaHelper.innerText = "o campo senha não pode estar vazio"
    console.log ("input de senha vazio")
    estilizarInputIncorreto(senhaInput, senhaHelper)
    inputsCorretos.senha = false  // Necessário atualização para envio ou não do formulario // Linha 120 do codigo


   }else{
      console.log("valor ok")
      estilizarInputCorreto(senhaInput, senhaHelper)
      inputsCorretos.senha = true  // Necessário atualização para envio ou não do formulario // Linha 120 do codigo

   }


})

// ---------- VALIDAÇÃO CONFIRMA SENHA ---------- //
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

// console.log(senhaLabel) - confirmar se está aparecendo no console(terminal)
togglePopup(confirmaSenhaInput,confirmaSenhaLabel)


confirmaSenhaInput.addEventListener("blur", (e)=>{
  let valorConfirmaSenha = e.target.value

  if(valorConfirmaSenha == senhaInput.value){
    estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper)
    inputsCorretos.confirmaSenha = true  // Necessário atualização para envio ou não do formulario // Linha 120 do codigo


   }else{
      confirmaSenhaHelper.innerText = "As senhas precisam ser iguais"
      estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper)
      inputsCorretos.confirmaSenha = false  // Necessário atualização para envio ou não do formulario // Linha 120 do codigo

   }


})

// ---------- Evitar envio do Formulário ---------- //
// no HTML,está associado o "submit" - enviar formulario
   let btnSubmit = document.querySelector('button[type="submit"]')
     console.log(btnSubmit); // verificar se está aparerecendo no terminal "console"

 // só posso enviar o formulario se todos os campos estiverem corretos.
 // criar um objeto com cada propriedade para verificar se todos os inputs obrigatorios são válidas
    let inputsCorretos = {
      username: false,
      email: false,
      senha: false,
      confirmaSenha: false
    }  

  // 1º vou evitar o envio padrão do "submit", cujo comportamento padrão é enviar formulario.
  // e eu quero evitar o comportamento padrão do submit caso os campos estejam incorretos
  // vou verificar cada propriedade se está correta
btnSubmit.addEventListener("click", (e)=>{
  if(inputsCorretos.username == false || inputsCorretos.email == false
    || inputsCorretos.senha == false || inputsCorretos.confirmaSenha == false){
    e.preventDefault() // preventDefault evita o envio do formulario caso click no botão BTN
      alert("os campos obrigatórios precisam ser preenchidos corretamente.")

  }else{
    alert("Formulario envio com sucesso")
  }
})
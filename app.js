function inserirNumero(num) {
   let numero = document.getElementById("displayCalculadora").textContent;
   document.getElementById("displayCalculadora").textContent = numero + num;
}

let operacao; // VARIÁVEL GLOBAL
let primeiraParcela; // VARIÁVEL GLOBAL

function inserirOperacao(parametro) {
   operacao = parametro;
   primeiraParcela = document.getElementById("displayCalculadora").textContent;
   primeiraParcela = parseInt(primeiraParcela);
   limpar(); 
}

function limpar() {
   document.getElementById("displayCalculadora").textContent = "";
}

let variavelNova; // VARIÁVEL GLOBAL

function calcular() {
   variavelNova = document.getElementById("displayCalculadora").textContent;
   variavelNova = parseInt(variavelNova);

   if (operacao === "+") {
      variavelNova = primeiraParcela + variavelNova;
   }

   if (operacao === "-") {
      variavelNova = primeiraParcela - variavelNova;
   }

   if (operacao === "*") {
      variavelNova = primeiraParcela * variavelNova;
   }

   if (operacao === "/") {
      variavelNova = primeiraParcela / variavelNova;
   }

   document.getElementById("displayCalculadora").textContent = variavelNova;
} 
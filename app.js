function inserirNumero(num) {
   let numero = document.getElementById("displayCalculadora").textContent;
   document.getElementById("displayCalculadora").textContent = numero + num;
   atualizarVisor();
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
let variavelPorcentagem; // VARIÁVEL GLOBAL

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

   if (operacao === '%') {
      variavelNova = primeiraParcela / 100;
   }

   document.getElementById("displayCalculadora").textContent = variavelNova;
   atualizarVisor();
}

function atualizarVisor() {
   let visor = document.getElementById("displayCalculadora");
   let numero = visor.textContent;

   // LIMITAR O NÚMERO DE DÍGITOS EXIBIDOS NO VISOR DA CALCULADORA
   
   if (numero.length > 9) {
      numero = numero.substring(0, 9);
   }

   visor.textContent = numero;
}

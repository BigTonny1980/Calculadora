function inserir(num) {
   let numero = document.getElementById("displayCalculadora").innerHTML;
   document.getElementById("displayCalculadora").innerHTML = numero + num;
}

function limpar() {
   document.getElementById("displayCalculadora").innerHTML = "";
}

function backspace() {
   let retrocesso = document.getElementById("displayCalculadora").innerHTML;
   document.getElementById("displayCalculadora").innerHTML = retrocesso.substring(0, retrocesso.length - 1);
}

function calcular() {
   let resultado = document.getElementById("displayCalculadora").innerHTML;
   if (resultado) {
      document.getElementById("displayCalculadora").innerHTML = eval(resultado);
   } else {
      document.getElementById("displayCalculadora").innerHTML = "What?";
   }
} 
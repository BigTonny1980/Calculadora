function inserir(num) {
   let numero = document.getElementById("displayCalculadora").textContent;
   document.getElementById("displayCalculadora").textContent = numero + num;
}

function limpar() {
   document.getElementById("displayCalculadora").textContent = "";
}

function calcular() {
   // Não faço ideia de como fazer o botão de igual funcionar. Suplico por iluminação.
} 
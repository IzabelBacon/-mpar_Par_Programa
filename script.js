function verificar() {
    var numero = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");

    if (numero === "") {
        resultado.innerHTML = "Por favor, insira um número.";
        resultado.style.color = "yellow";
    } else {
        numero = parseInt(numero);
        
        if (numero % 2 === 0) {
            resultado.innerHTML = "O número " + numero + " é Par.";
            resultado.style.color = "#27ae60"; /* Verde para Par */
        } else {
            resultado.innerHTML = "O número " + numero + " é Ímpar.";
            resultado.style.color = "#e74c3c"; /* Vermelho para Ímpar */
        }
    }
}
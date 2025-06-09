// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", function() {
      document.getElementById('formMedia').addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio do formulário

        // Pegando os valores dos inputs
        let nota1 = parseFloat(document.getElementById('nota1').value);
        let nota2 = parseFloat(document.getElementById('nota2').value);

        // Validação
        if (isNaN(nota1) || isNaN(nota2)) {
          alert('Por favor, digite duas notas válidas.');
        } else {
          let media = (nota1 + nota2) / 2;
          alert('A média é: ' + media.toFixed(1));
        }
      });
    });
function calcularNota() {
  let nota1 = parseFloat(prompt("Digite a primeira nota:")); //declara a variavel e os nomes e coloca um texto dentro dela
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));

  let notaFinal = nota1 + nota2;  // Aqui faz o calculo das duas notas declaradas

  alert("NOTA FINAL = " + notaFinal.toFixed(1));   // Mostra um alerta com o texto "NOTA FINAL =" e a nota formatada com 1 casa decimal

  if (notaFinal < 60.0) {       // Se a nota final for menor que 60.0, mostra que o aluno foi reprovado
    alert("REPROVADO");
  }
}

calcularNota(); // Chama a função para ela rodar assim que o código for executado
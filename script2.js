function terreno() {
    let largura = parseFloat(prompt("Digite a largura do terreno:"));  // Corrigido o nome
    let comprimento = parseFloat(prompt("Digite o comprimento do terreno:"));
    let valor = parseFloat(prompt("Digite o valor do metro quadrado:"));

    let area = largura * comprimento;  // Agora a variável 'largura' existe
    let preco = area * valor;          // Calcula o preço final

    alert("Area do Terreno = " + area.toFixed(2) + "\nPreco do Terreno = " + preco.toFixed(2));  // Mostra tudo
}

terreno();  // Chama a função

// script.js

document.getElementById('sortear').addEventListener('click', function() {
    // valores de mínimo e máximo
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    // verificar se os valores são válidos
    if (isNaN(min) || isNaN(max) || min > max) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // gerar um número aleatório entre min e max
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    // exibir o resultado
    document.getElementById('resultado').textContent = `Número sorteado: ${resultado}`;
});

var numero = prompt('Digite o primeiro número');

if (numero % 2 === 0 && numero > 0 && numero < 100) {
    alert('✔ O número atende aos critérios');
} else {
    alert('✘ O número não atende aos critérios.');
}
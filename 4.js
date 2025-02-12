function classificarNumero(numero) {
    if (numero === 0) {
        return "Zero";
    }
    if (numero > 0) {
        return numero % 2 === 0 ? "Positivo e Par" : "Positivo e Ímpar";
    }
    return "Negativo";
}

console.log(classificarNumero(-5)); // Deve imprimir: Negativo
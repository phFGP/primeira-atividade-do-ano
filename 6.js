function verificarAnoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
        ? "Ano bissexto"
        : "Não é ano bissexto";
}

console.log(classificarNota(8)); // Deve imprimir: Bom
function classificarNota(nota) {
    if (nota >= 9) {
        return "Excelente";
    }
    if (nota >= 7) {
        return "Bom";
    }
    if (nota >= 5) {
        return "Regular";
    }
    return "Insuficiente";
}
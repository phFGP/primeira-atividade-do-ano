function aplicardesconto(valorcompra, codigodesconto){
    switch (codigodesconto){
        case "DESC10":
            return valorcobrar * 0.90;
        case "DESC20":
            return valorcompra * 0.80;
        default:
            console.log("desconto invalido");
            return valorcompra;

    }
}

let valororiginal = 100;
let codigo = "DESC10";
let valorcompra = aplicardesconto(valororiginal, codigo);
console.log(valorcompra)
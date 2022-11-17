function calcular() {
    quant = Number(document.getElementById("quant").value);
    precounit = Number(document.getElementById("preco").value);
    res = document.getElementById("res");

    if (quant>200) {
        precofinal = quant * (precounit*1.5);
    } else if (quant>100){
        precofinal = quant * (precounit*1.25);
    } else {
        precofinal = quant * precounit;
    }

    res.innerHTML = `Considerando uma quantidade de ${quant} e um preco unitario de ${precounit} e os acrescimos correspondentes o preco final será de ${precofinal}`

}
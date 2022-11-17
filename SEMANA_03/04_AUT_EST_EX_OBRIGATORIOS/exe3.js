function converte() {
    escala = document.getElementById("escala").value;
    temp = document.getElementById("temp").value
    res = document.getElementById("res")

    if (escala == "graus") {
        temperatura = ((temp/5)*9)+32;
    }
    else {
        temperatura = ((temp - 32)/9)*5
    }
    res.innerHTML = `Considerando uma tempetura de ${temp}, a temperatura convertida será de ${temperatura}.`

}
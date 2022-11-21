function exe1() {
    tabuada = document.getElementById("tabuada").value
    inicio = document.getElementById("inicio").value
    fim = document.getElementById("fim").value
    res = document.getElementById("res")

    for(i=inicio; i<=fim; i++){
        res.innerHTML+= tabuada + " X " + i + " = " + tabuada*i + "<br>"
    }

}

function exe2() {
    num = document.getElementById("numero").value
    res = document.getElementById("res")

    lista = []
    lista2 = []

    res.innerHTML = ""

    for(i=0;i<=num.length-1;i++){
        lista[i] = num[i]
        lista2.unshift(lista[i])
    }

    for(i=0;i<=num.length-1;i++){
        if(lista[i]===lista2[i]){} else {
            res.innerHTML = ("nao é palindromo")
            break
        }
        res.innerHTML = ("é palindromo")
    }
    
}

function exe3() {
    num = document.getElementById("num").value
    res = document.getElementById("res")

    res.innerHTML = ""

    for(i = 1; i<=num ; i++) {
        res.innerHTML += i + " - "
        if(i % 3 == 0) {
            res.innerHTML += " PI - "
        }
    }
}

function exe4() {
    alturaazulejo = document.getElementById("alturaazulejo").value
    comprimentoazulejo = document.getElementById("comprimentoazulejo").value
    alturaparede = document.getElementById("alturaparede").value * 100
    comprimentoparede = document.getElementById("comprimentoparede").value * 100
    res = document.getElementById("res")

    q1 = alturaparede/alturaazulejo
    q2 = comprimentoparede/comprimentoazulejo

    qfinal = (q1*q2)*1.05

    res.innerHTML = `A quantidade final de azulejos necessários será igual a: ${qfinal}`
}
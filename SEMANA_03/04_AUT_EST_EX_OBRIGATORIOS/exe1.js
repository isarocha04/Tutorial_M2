const gravidade = 10;


function calcular() {
    vel = Number(document.getElementById("vel").value);
    res = document.getElementById("res");

    tsubida = vel/gravidade;
    
    hmax = (vel**2)/(2*gravidade);

    res.innerHTML = `Considerando uma velocidade inicial de ${vel} metros por segundo, o tempo de subida será igual a: ${tsubida} segundos e o a altura máxima será igual a: ${hmax} metros.`;
}
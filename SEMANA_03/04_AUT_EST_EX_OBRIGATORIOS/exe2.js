function calcular() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    c = Number(document.getElementById("c").value);
    res = document.getElementById("res");

    xvertice = (-(b/(2*a)));
    yvertice = -(((b**2)-(4*a*c))/(4*a));
    
    res.innerHTML =`Considerando a = ${a}, b = ${b} e c = ${c}, o Xvértice será igual a: ${xvertice} e o Yvértice será igual a: ${yvertice}`
}
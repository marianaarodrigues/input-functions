function areacirc() {
    let raio = parseFloat(document.getElementById('raio').value)
    let area = (Math.PI * Math.pow(raio, 2)).toFixed(2)
    document.getElementById('areacir').innerHTML = area
}

function arearet() {
    let num1 = parseFloat(document.getElementById('baseretangulo').value)
    let num2 = parseFloat(document.getElementById('altretangulo').value)
    let area = (num1 * num2).toFixed(2)
    document.getElementById('arearetang').innerHTML = area
}

function areatri() {
    let num1 = parseFloat(document.getElementById('basetriangulo').value)
    let num2 = parseFloat(document.getElementById('alttriangulo').value)
    let area = ((num1 * num2) / 2).toFixed(2)
    document.getElementById('areatriang').innerHTML = area
}

function hipoten() {
    let num1 = parseFloat(document.getElementById('cateto1').value)
    let num2 = parseFloat(document.getElementById('cateto2').value)
    let hipotenusa = (Math.sqrt(num1 * num1 + num2 * num2)).toFixed(2)
    document.getElementById('hipot').innerHTML = hipotenusa
}

function bhaskar() {
    let a = parseFloat(document.getElementById('valora').value)
    let b = parseFloat(document.getElementById('valorb').value)
    let c = parseFloat(document.getElementById('valorc').value)
    let delta = parseFloat(b * b - 4 * a * c)
    console.log(delta)
    let raiz1 = (parseFloat((-1 * b + Math.sqrt(delta)) / (2 * a))).toFixed(2)
    let raiz2 = (parseFloat((-1 * b - Math.sqrt(delta)) / (2 * a))).toFixed(2)
    let resultado = raiz1 + ' e ' + raiz2
    document.getElementById('bhask').innerHTML = resultado
}

function realemdolar() {
    let cotacao = parseFloat(document.getElementById('cotacao').value)
    let real = parseFloat(document.getElementById('reais').value)
    let dolar = (real / cotacao).toFixed(2)
    document.getElementById('realdolar').innerHTML = dolar
}

function celsfahr() {
    let celsius = parseFloat(document.getElementById('celsius').value)
    let fahrenheit = (1.8 * celsius + 32).toFixed(2)
    document.getElementById('celsiusfahr').innerHTML = fahrenheit
}

function msegundo() {
    let velkm = parseFloat(document.getElementById('kmporhora').value)
    let velm = (velkm / 3.6).toFixed(2)
    document.getElementById('velmpors').innerHTML = velm
}

function media3notas() {
    let n1 = parseFloat(document.getElementById('nota1').value)
    let n2 = parseFloat(document.getElementById('nota2').value)
    let n3 = parseFloat(document.getElementById('nota3').value)
    let medianota = ((n1 + n2 + n3) / 3).toFixed(2)
    document.getElementById('medianotas').innerHTML = medianota
}
function soma2num() {
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);
    let soma = (num1 + num2).toFixed(2);
    document.getElementById('soma').innerHTML = soma;
}
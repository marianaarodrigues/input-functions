function areacirc() {
    let raio = parseFloat(document.getElementById('raio').value);
    let area = (Math.PI * Math.pow(raio, 2)).toFixed(2);
    document.getElementById('areacir').innerHTML = area;
}

function arearet() {
    let num1 = parseFloat(document.getElementById('baseretangulo').value);
    let num2 = parseFloat(document.getElementById('altretangulo').value);
    let area = (num1 * num2).toFixed(2);
    document.getElementById('arearetang').innerHTML = area;
}
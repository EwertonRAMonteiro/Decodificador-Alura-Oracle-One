var textInput = document.querySelector('#textIn');
var textOut = document.querySelector('#outText');

function encriptar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

    document.getElementById('outText').innerHTML = '<textarea readonly id="textIn">'
        + resultCripto
        + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar<button>'
}

function descriptar() {
    var texto = textInput.value;

    var resultDesripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

    document.getElementById('outText').innerHTML = '<textarea readonly id="textIn">'
        + resultDesripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar<button>'
}

function copiar(){
    var textoCopiar = document.getElementById('textInput');

    textoCopiar.select();
    document.execCommand('copy');
    alert('Texto Copiado');
}
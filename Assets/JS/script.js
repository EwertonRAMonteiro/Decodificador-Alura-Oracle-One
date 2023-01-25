var textIn = document.querySelector('#bnt-incriptar');
var textOut = document.querySelector('#bnt-descriptar');

function encriptar() {
    var texto = textIn.valeu;

    var resultCripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById('bnt-descriptar').innerHTML = '<textarea readonly id="bnt-incriptar">'
        + resultCripto +
        + '<textarea>' + '<button class="bnt-copiar" id="copiar" onclick="copiar()">Copiar<button>'
}

function descriptar() {
    var texto = textIn.valeu;

    var resultDesripto = texto.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");

    document.getElementById('bnt-descriptar').innerHTML = '<textarea readonly id="bnt-incriptar">'
        + resultDesripto +
        + '<textarea>' + '<button class="bnt-copiar" id="copiar" onclick="copiar()">Copiar<button>'
}

function copiar(){
    var textoCopiar = document.getElementById()
}
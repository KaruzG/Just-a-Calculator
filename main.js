console.log("dia1.js loaded!")
function suma() {
    let num1 = parseInt(document.getElementById("numero1").value, 10);
    let num2 = parseInt(document.getElementById("numero2").value, 10);
    document.getElementById("resultado").innerHTML = num1 + num2;
}

function resta() {
    let num1 = parseInt(document.getElementById("numero1").value, 10);
    let num2 = parseInt(document.getElementById("numero2").value, 10);
    document.getElementById("resultado").innerHTML = num1 - num2;
}
//Escriba aquí su código JavaScript:
function generar(){
    return Math.ceil(Math.random() * 10);
}

let nro = generar();

function comparar(){
    let nroUsuario = document.getElementById("nroUsuario_id").value;
    if (nroUsuario < nro) {
        alert("El número es mayor que el ingresado");
    } else if (nroUsuario > nro) {
        alert("El número es menor que el ingresado");
    } else {
        alert("Felicitaciones! Adivinaste!!!");
    }
}

let intentos = 0;

function contador(){
    return intentos += 1;
}

function jugar(){
    intentos += 1;
    if (intentos < 3) {
    comparar();
    } else {
        alert("Has agotado los 3 intentos")
    }    
}
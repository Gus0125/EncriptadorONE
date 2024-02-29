const textArea = document.querySelector(".textArea");
const areaResultado = document.querySelector(".areaResultado");
const botonEncriptar = document.querySelector("#botonEncriptar");
const botonDesencriptar = document.querySelector("#botonDesencriptar");
const botonCopiar = document.querySelector("#botonCopiar");
const infoMessage = document.querySelector(".info");
const subtitle = document.querySelector(".subtitulo");


// Almacena el estilo original del mensaje .info
const originalStyle = {
    color: infoMessage.style.color,
    fontSize: infoMessage.style.fontSize
};
//Matriz para encriptar y desencriptar
const matrizEncriptar = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"] //indice 4
    ];
function btnEncriptar(){
    const textoEncriptado = Encriptar(textArea.value);
    areaResultado.style.backgroundImage = "none"
    subtitle.style.display = "none"
    textArea.value = "";
    areaResultado.value = textoEncriptado
}   
function Encriptar(textEncriptar){
    if (textArea.value.trim() === "") {
        alert("Por favor ingresa un texto antes de desencriptar."); // Mostrar alerta si no hay texto
        return; // Salir de la función si no hay texto
        }
    for(let i = 0; i < matrizEncriptar.length; i++) {
        if(textEncriptar.includes(matrizEncriptar[i][0])) {
            textEncriptar = textEncriptar.replaceAll(matrizEncriptar[i][0], matrizEncriptar[i][1]);
        }
    }
    return textEncriptar
    
}
function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(textArea.value);
    areaResultado.style.backgroundImage = "none"
    subtitle.style.display = "none"
    textArea.value = "";
    areaResultado.value = textoDesencriptado
}   
function Desencriptar(textDesencriptar){
    if (textArea.value.trim() === "") {
        alert("Por favor ingresa un texto antes de desencriptar."); // Mostrar alerta si no hay texto
        return; // Salir de la función si no hay texto
        }
    for(let i = 0; i < matrizEncriptar.length; i++) {
        if(textDesencriptar.includes(matrizEncriptar[i][1])) {
            textDesencriptar = textDesencriptar.replaceAll(matrizEncriptar[i][1], matrizEncriptar[i][0]);
        }
    }
    return textDesencriptar
}
        
function btnCopiar(){
    areaResultado.select();
    document.execCommand("copy");
    }
        
textArea.addEventListener("input", function(event) {
    const inputValue = textArea.value;
    const lowercaseValue = inputValue.toLowerCase();

    if (inputValue !== lowercaseValue || /[^a-z\s]/.test(inputValue)) {
        // Si el valor contiene caracteres no permitidos
        textArea.value = lowercaseValue.replace(/[^a-z\s]/g, ''); // Se sobrescribe el valor con solo minúsculas y sin caracteres no permitidos
        infoMessage.style.color = "red"; // Se cambia el color del mensaje de información a rojo
        infoMessage.style.fontSize = ".7em"; // Se incrementa el tamaño del texto
        infoMessage.textContent = "¡Solo letras minúsculas y sin acentos son permitidas!"; // Se cambia el mensaje de información

        // Restaurar el estilo original después de un tiempo
        setTimeout(function() {
            infoMessage.style.color = originalStyle.color; // Se restaura el color del mensaje de información
            infoMessage.style.fontSize = originalStyle.fontSize; // Se restaura el tamaño del texto
            infoMessage.textContent = "Solo letras minúsculas y sin acentos"; // Se restablece el mensaje de información
        }, 1500); // 1.5 segundos de espera
    } else {
        infoMessage.style.color = originalStyle.color; // Se restaura el color del mensaje de información
        infoMessage.style.fontSize = originalStyle.fontSize; // Se restaura el tamaño del texto
        infoMessage.textContent = "Solo letras minúsculas y sin acentos"; // Se restablece el mensaje de información
    }
});




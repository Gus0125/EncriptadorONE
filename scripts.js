const textArea = document.querySelector(".textArea");
const areaResultado = document.querySelector(".areaResultado");
const botonEncriptar = document.querySelector("#botonEncriptar");
const botonDesencriptar = document.querySelector("#botonDesencriptar");
const botonCopiar = document.querySelector("#botonCopiar");
const infoMessage = document.querySelector(".info");

// Almacena el estilo original del mensaje .info
const originalStyle = {
    color: infoMessage.style.color,
    fontSize: infoMessage.style.fontSize
};

textArea.addEventListener("input", function() {
    const inputValue = textArea.value;
    const lowercaseValue = inputValue.toLowerCase();

    if (inputValue !== lowercaseValue || /[^a-z]/.test(inputValue)) {
        // Si el valor contiene caracteres no permitidos
        textArea.value = lowercaseValue.replace(/[^a-z]/g, ''); // Se sobrescribe el valor con solo minúsculas y sin caracteres no permitidos
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

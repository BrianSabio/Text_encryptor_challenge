
//VINCULACIÓN DE NODOS Y ELEMENTOS HTML//
const input_text = document.querySelector("#input_text");   //input textarea
const btn_encriptar = document.querySelector(".btn_encriptar");   //botón encriptar
const btn_desencriptar = document.querySelector(".btn_desencriptar");   //botón desencriptar
const p_output = document.querySelector("#p_output");   //párrafo salida
const img_diamante = document.querySelector(".img_diamante")   //imagen mujer diamante
const btn_copy = document.querySelector(".btn_copy");   //botón copiar
const hide_div = document.querySelector(".hide")   //clase ocultar div botón

//DEFINICIÓN DE LLAVES DE ENCRIPTACIÓN
const llaves = {
    "e" : "enter",
    "i" : "imes",
    "a" : "ai",
    "o" : "ober",
    "u" : "ufat"
};

//DEFINICIÓN DE FUNCIONES//

//Función para controlar el texto ingresado
function controlarInput(texto) {
    if (!/^[a-z\s]+$/.test(texto)) {
        alert("Por favor ingrese datos válidos");
        return;
    };
    return texto;
};

//Función para encriptar
function encriptarTexto (texto) {
    let textoControlado = controlarInput(texto);
    let textoEncriptado = textoControlado.replace(/[aeiou]/g, letra => llaves[letra] || letra);
    return textoEncriptado;
};

//Función para desencriptar
function desencriptarTexto (texto) {
    let textoControlado = controlarInput(texto);
    let textoDesencriptado = textoControlado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
};

//Función para copiar
async function copiarTexto() {
    try {
        let texto = p_output.textContent;
        if (texto.includes("Ingresa el texto que desees encriptar o desencriptar")) {
            return
        };
        await navigator.clipboard.writeText(texto);
        alert("Texto Copiado")
    } catch (error) {
        console.error('Error al copiar texto:', error);
    };
};

//CREACIÓN DE EVENTOS DE CLICK

// //Evento de encriptación
// btn_encriptar.addEventListener('click', () => {
//     let texto = input_text.value.trim();
//     if (texto === "") {
//         hide_div.style.display = "none";
//         img_diamante.style.display = "block";
//         p_output.innerHTML = "Ningún mensaje fue encontrado <br> <br>Ingresa el texto que desees encriptar o desencriptar"
//     } else {
//         const textoEncriptado = encriptarTexto(texto);
//         p_output.textContent = textoEncriptado;
//         img_diamante.style.display = "none";
//         hide_div.style.display = "flex";
//     };
// });

const anchoResolucion = document.documentElement.clientWidth;
//Evento de encriptación
btn_encriptar.addEventListener('click', () => {
    let texto = input_text.value.trim();
    if (texto === "") {
        hide_div.style.display = "none";
        img_diamante.style.display = "block";
        if (anchoResolucion < 1201) {
            img_diamante.style.display = "none";
        }
        p_output.innerHTML = "Ningún mensaje fue encontrado <br> <br>Ingresa el texto que desees encriptar o desencriptar"
    } else {
        const textoEncriptado = encriptarTexto(texto);
        p_output.textContent = textoEncriptado;
        img_diamante.style.display = "none";
        hide_div.style.display = "flex";
    };
});

//Evento de desencriptación
btn_desencriptar.addEventListener('click', () => {
    let texto = input_text.value.trim();
    if (texto === "") {
        hide_div.style.display = "none";
        img_diamante.style.display = "block";
        if (anchoResolucion < 1201) {
            img_diamante.style.display = "none";
        }
        p_output.innerHTML = "Ningún mensaje fue encontrado <br> <br>Ingresa el texto que desees encriptar o desencriptar"
    } else {
        const textoDesencriptado = desencriptarTexto(texto);
        p_output.textContent = textoDesencriptado;
        img_diamante.style.display = "none";
        hide_div.style.display = "flex";
    };
});

//Evento de copiado
btn_copy.addEventListener('click', copiarTexto);
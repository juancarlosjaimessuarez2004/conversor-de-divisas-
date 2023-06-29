setTimeout(() => {
    console.log("Delayed for 1 second."); // Retraso de 1 segundo
    document.getElementById('calculadora').removeAttribute('class', 'oculto'); // Muestra el elemento con el id 'calculadora' eliminando la clase 'oculto'
    document.getElementById('loader').setAttribute('class', 'oculto'); // Oculta el elemento con el id 'loader' añadiendo la clase 'oculto'

}, 19000);

// Función para realizar la conversión
function convertir() {
    var valor = document.getElementById("cantidad").value; // Obtiene el valor del campo de cantidad
    var de = document.getElementById("convertirDe").value; // Obtiene el valor del campo convertirDe
    var a = document.getElementById("convertirA").value; // Obtiene el valor del campo convertirA
    var dolar = 4171.78; // Valor de conversión de dolar
    var euro = 4496.74; // Valor de conversión de euro
    var convertidoA = 0; // Variable para almacenar el valor convertido

    // Realiza la conversión según las opciones seleccionadas
    if (de == 1 && a == 2) {
        convertidoA = valor / dolar;
    } else if (de == 1 && a == 3) {
        convertidoA = valor / euro;
    } else if (de == 2 && a == 1) {
        convertidoA = valor * dolar;
    } else if (de == 2 && a == 3) {
        convertidoA = valor * (dolar / euro);
    } else if (de == 3 && a == 1) {
        convertidoA = valor * euro;
    } else if (de == 3 && a == 2) {
        convertidoA = valor * (euro / dolar);
    } else {
        convertidoA = valor;
    }

    // Actualiza el resultado en el campo con el id 'convertidoA'
    document.getElementById("convertidoA").value = convertidoA;
}

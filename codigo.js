function calcularTotal() {
    // Obtenemos los valores y los convertimos a números (si están vacíos, usamos 0)
    const grande = parseInt(document.getElementById('grande').value) || 0;
    const mediana = parseInt(document.getElementById('mediana').value) || 0;
    const pequena = parseInt(document.getElementById('pequena').value) || 0;

    // Precios
    const total = (grande * 5300) + (mediana * 3300) + (pequena * 3800);

    // Formateamos con separador de miles
    const totalFormateado = total.toLocaleString('es-CO');

    // Mostramos el resultado
    document.getElementById('resultado').innerText = `Total a pagar: $${totalFormateado} COP`;
}
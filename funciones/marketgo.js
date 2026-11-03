// Calcular total de un producto
function calcularTotal(precio, cantidad) {
    if (precio < 0 || cantidad < 0) {
        throw new Error("Los valores no pueden ser negativos");
    }

    return precio * cantidad;
}

// Calcular subtotal de varios productos
function calcularSubtotal(productos) {
    return productos.reduce((total, producto) => {
        return total + (producto.precio * producto.cantidad);
    }, 0);
}

// Validar datos 
function validarDatos(datos) {
    return Object.values(datos).every(valor =>
        String(valor ?? "").trim() !== ""
    );
}

module.exports = {
    calcularTotal,
    calcularSubtotal,
    validarDatos
};
const { calcularSubtotal } = require('../funciones/marketgo');

describe('Pruebas del subtotal de compra', () => {

    test('P-04: Sumar correctamente varios productos', () => {

        const productos = [
            { precio: 10, cantidad: 2 },
            { precio: 5, cantidad: 3 },
            { precio: 20, cantidad: 1 }
        ];

        expect(calcularSubtotal(productos)).toBe(55);
    });

    test('P-05: Subtotal sin productos', () => {
        expect(calcularSubtotal([])).toBe(0);
    });

});
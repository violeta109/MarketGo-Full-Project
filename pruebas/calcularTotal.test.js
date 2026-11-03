const { calcularTotal } = require('../funciones/marketgo');

describe('Pruebas del cálculo total', () => {

    test('P-01: Calcular correctamente el total', () => {
        expect(calcularTotal(10, 3)).toBe(30);
    });

    test('P-02: Calcular una unidad', () => {
        expect(calcularTotal(15, 1)).toBe(15);
    });

    test('P-03: Rechazar precios negativos', () => {
        expect(() => calcularTotal(-10, 2))
            .toThrow("Los valores no pueden ser negativos");
    });

});
const { validarDatos } = require('../funciones/marketgo');

describe('Pruebas de validación de datos', () => {

    test('P-06: Aceptar datos completos', () => {

        const datos = {
            nombre: 'Juan',
            correo: 'juan@gmail.com',
            usuario: 'juan123'
        };

        expect(validarDatos(datos)).toBe(true);
    });

    test('P-07: Rechazar campos vacíos', () => {

        const datos = {
            nombre: '',
            correo: 'juan@gmail.com',
            usuario: 'juan123'
        };

        expect(validarDatos(datos)).toBe(false);
    });

    test('P-08: Rechazar valores nulos', () => {

        const datos = {
            nombre: null,
            correo: 'juan@gmail.com'
        };

        expect(validarDatos(datos)).toBe(false);
    });
});
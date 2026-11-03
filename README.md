# MarketGo · Proyecto completo organizado

## Estructura
- `index.html`: estructura de la aplicación.
- `css/styles.css`: todos los estilos extraídos del HTML original.
- `js/app.js`: JavaScript extraído del HTML original.
- `assets/icons/marketgo-logo.svg`: recurso local de marca de ejemplo.
- `assets/products/README.md`: indica cómo incorporar fotografías reales de productos.
- `RESPALDO/index-original.html`: copia íntegra del HTML original previo a la separación de archivos.

## Cómo abrir
Abre `index.html` en el navegador. Para desarrollo, abre esta carpeta en Visual Studio Code y utiliza Live Server.

## Cuentas de demostración
Las cuentas de administrador, empleado y cliente están incorporadas en `js/app.js` y también se muestran en la pantalla de inicio de sesión. Consulta `CUENTAS-DEMO.txt` para copiarlas fácilmente.

## Roles y diseño adaptable
Esta versión incluye los cambios de responsive y perfiles cliente, empleado y administrador que estaban en la última página HTML disponible.

## Importante sobre imágenes
El HTML disponible no contenía fotografías de producto como archivos locales ni etiquetas `<img>`. No se presentan imágenes ficticias como si fueran fotos oficiales. La carpeta `assets/products` está preparada para añadir fotografías propias/autorizadas. El código original de la interfaz puede mostrar iconos/emojis en algunas secciones.

## Persistencia y seguridad
Los roles y datos del frontend son demostrativos. Para producción, las validaciones de permisos deben estar en un backend y los datos deben almacenarse en una base de datos central.


## Permisos por rol
- Administrador: productos, proveedores, usuarios/roles, pedidos, inventario y reportes.
- Empleado: registro de entradas de mercadería e historial de movimientos.
- Cliente: catálogo, ofertas, carrito, compras e historial propio.

Las cuentas de demostración son `admin@marketgo.pe`, `empleado@marketgo.pe` y `ana@marketgo.pe`, contraseña `1234`. Los datos persisten localmente en el navegador.

<?php
require_once "conexion.php";

$resultado = $conexion->query("SELECT * FROM productos LIMIT 5");

if ($resultado) {
    echo "Conexión exitosa con MarketGo";
    echo "<br>Consulta de productos realizada correctamente";
} else {
    echo "Error al consultar productos";
}
?>
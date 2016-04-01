<?php
if($_POST["nombre"] && $_POST["email"] != ""){
	$de = $_POST["nombre"];
	$destino = "contacto@perrotriste.org";
	$asunto = "FORMULARIO DE EJEMPLO";
	$mensaje .= "FORMULARIO."."\n";
	$mensaje .= "\n";
	$mensaje .= "NOMBRE: " . utf8_decode($_POST["nombre"]) ."\n";
	$mensaje .= "\n";
	$mensaje .= "EMAIL: " . utf8_decode($_POST["email"]) ."\n";
    $emailheader = "From: LO QUE TU QUIERAS <tuemail>\r\n";
    mail($destino, $asunto, $mensaje, $emailheader) or die ("Lo sentimos, tu solicitud no ha sido enviada.<br/>Intentelo de nuevo.");
    echo utf8_decode(utf8_encode('Tu consulta ha sido enviada correctamente.'));
} else {
    if($_POST["nombre"] == ""){
        echo utf8_encode ('Por favor, indica tu nombre.');
        exit; 
    }
    if($_POST["email"] == ""){
        echo utf8_encode ('Por favor, indica un email de contacto.');
        exit; 
    }
}
?>
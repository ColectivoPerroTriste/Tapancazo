<?php
	$de       = $_POST["nombreEquipo"];
	$destino  = "contacto@perrotriste.org";
	$asunto   = "Inscripción del equipo: " . $_POST["nombreEquipo"];
	$mensaje .= "Equipo: " . $_POST["nombreEquipo"] . "\n";
	$mensaje .= "\n";
    $mensaje .= "Libro: " . $_POST["libro"] . "\n";
	$mensaje .= "\n";
    $mensaje .= "\n";
    $mensaje .= "\n";
    $mensaje .= "Integrante 1" . "\n";
	$mensaje .= "\n";
    $mensaje .= "Nombre:" . "\n" . $_POST["nombre1"] . "\n";
	$mensaje .= "\n";
    $mensaje .= "Correo:" . "\n" . $_POST["email1"] . "\n";
	$mensaje .= "\n";
    $mensaje .= "Ocupación:" . "\n" . $_POST["ocupacion1"] . "\n";
	$mensaje .= "\n";
    $mensaje .= "Motivos:" . "\n" . $_POST["motivos1"] . "\n";
	$mensaje .= "\n";
    $mensaje .= "Antecedentes:" . "\n" . $_POST["antecedentes1"] . "\n";
	$mensaje .= "\n";
    $mensaje .= "Difusión:" . "\n" . $_POST["difusion1"] . "\n";
	$mensaje .= "\n";
    if ($_POST["nombre2"] != "") {
        $mensaje .= "\n";
        $mensaje .= "Integrante 2" . "\n";
        $mensaje .= "\n";
        $mensaje .= "Nombre:" . "\n" . $_POST["nombre2"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Correo:" . "\n" . $_POST["email2"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Ocupación:" . "\n" . $_POST["ocupacion2"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Motivos:" . "\n" . $_POST["motivos2"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Antecedentes:" . "\n" . $_POST["antecedentes2"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Difusión:" . "\n" . $_POST["difusion2"] . "\n";
        $mensaje .= "\n";
    }
    if ($_POST["nombre3"] != "") {
        $mensaje .= "\n";
        $mensaje .= "Integrante 3" . "\n";
        $mensaje .= "\n";
        $mensaje .= "Nombre:" . "\n" . $_POST["nombre3"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Correo:" . "\n" . $_POST["email3"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Ocupación:" . "\n" . $_POST["ocupacion3"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Motivos:" . "\n" . $_POST["motivos3"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Antecedentes:" . "\n" . $_POST["antecedentes3"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Difusión:" . "\n" . $_POST["difusion3"] . "\n";
        $mensaje .= "\n";
    }
    if ($_POST["nombre4"] != "") {
        $mensaje .= "\n";
        $mensaje .= "Integrante 4" . "\n";
        $mensaje .= "\n";
        $mensaje .= "Nombre:" . "\n" . $_POST["nombre4"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Correo:" . "\n" . $_POST["email4"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Ocupación:" . "\n" . $_POST["ocupacion4"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Motivos:" . "\n" . $_POST["motivos4"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Antecedentes:" . "\n" . $_POST["antecedentes4"] . "\n";
        $mensaje .= "\n";
        $mensaje .= "Difusión:" . "\n" . $_POST["difusion4"] . "\n";
        $mensaje .= "\n";
    }
    $emailheader = "From: Formulario del Tapancazo \r\n";
    mail($destino, $asunto, $mensaje, $emailheader) or die ("<META HTTP-EQUIV='Refresh' CONTENT='0; URL=../html/fracaso.html'>");
    header( "Status: 301 Moved Permanently", false, 301);
    header("Location: ../html/exito.html");
    exit();  
?>
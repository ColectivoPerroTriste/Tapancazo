function Agregar() {
    var integrantes = document.getElementsByClassName("integrante"),
        boton = document.getElementById("boton2");
    
    for (var i = 0; i < integrantes.length; i++) {
        if (integrantes[i].style.display == "none") {
            integrantes[i].style.display = "inherit";
            if (integrantes[i] == integrantes[integrantes.length-1]) {
                boton.style.display = "none";
            }
            break;
        }
    }
}
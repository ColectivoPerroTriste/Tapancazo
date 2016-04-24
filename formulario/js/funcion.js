var botonEnviar;

//  Cuando todo se carga, se inician las funciones porque ya están disponibles los elementos del DOM
window.onload = function () {
    var camposNecesarios = document.getElementsByClassName("camposNecesarios"),
        camposOtros = document.getElementsByTagName("textarea");
    
    //  Las siguientes iteraciones resetean los valores
    for (var i = 0; i < camposNecesarios.length; i++)
    {
        //  Añade un listener cada vez que se hace un cambio en el campo; llama a la función Habilitar()
        camposNecesarios[i].addEventListener("change", Habilitar);
        camposNecesarios[i].value = "";
    }
    
    for (var j = 0; j < camposOtros.length; j++)
        camposOtros[j].value = "";
    
    //  Asigna y deshabilita el botón de enviar
    botonEnviar = document.getElementById("botonEnviar");
    botonEnviar.disabled = true;
}

//  Esta función la llama el botón de agregar
function Agregar() {
    var integrantes = document.getElementsByClassName("integrante"),
        botonAgregar = document.getElementById("botonAgregar"),
        botonEliminar = document.getElementById("botonEliminar");
    
    //  Itera todos los cosmonautas
    for (var i = 0; i < integrantes.length; i++) {
        //  Como se agregan nuevos, se deshabilita el botón de enviar para obligar a llenar los campos necesarios
        botonEnviar.disabled = true;
        
        //  Si alguno de los cosmonautas está oculto
        if (integrantes[i].style.display == "none") {
            //  Si es el cosmonauta 2 o 3
            if (i <= 2) {
                //  Lo desoculta y aparece el botón de eliminar cuya alineación, junto con el de agregar, se hace flotante
                integrantes[i].style.display = "inherit";
                botonEliminar.style.display = "inherit";
                botonAgregar.style.float = "left";
                botonEliminar.style.float = "right";
                break;
            }
            //  Si es el cosmonauta 4
            else {
                //  Lo desoculta y desaparece el botón de agregar, por lo que se le elimina la alineación flotante al botón de eliminar
                integrantes[i].style.display = "inherit";
                botonAgregar.style.display = "none";
                botonAgregar.style.float = "none";
                botonEliminar.style.float = "none";
            }
        }
    }
}

//  Esta función la llama el botón de eliminar
function Eliminar() {
    
    var integrantes = document.getElementsByClassName("integrante"),
        botonAgregar = document.getElementById("botonAgregar"),
        botonEliminar = document.getElementById("botonEliminar"),
        camposOtros = document.getElementsByTagName("textarea"),
        camposNecesarios = document.getElementsByClassName("camposNecesarios");
    
    //  Verifica si todos los elementos anteriores están llenos para habilitar el botón
    function Verificar (max) {
        var todosLlenos = max;
        
        //  Se resta uno por cada elemento lleno
        for (var i = 0; i < max; i++)
            if (camposNecesarios[i].value != "")
                todosLlenos--;

        //  Si se llega a cero quiere decir que se ha de volver a habilitar el botón porque todos están llenos
        if (todosLlenos == 0)
            botonEnviar.disabled = false;
        else
            botonEnviar.disabled = true;
    }
    
    //  Solo itera a los últimos dos elementos de los integrantes: cosmonautas 3 y 4
    for (var i = 1; i < integrantes.length; i++) {
        //  Si alguno de los cosmonautas están visibles
        if (integrantes[i].style.display == "inherit") {
            //  Si es el cosmonauta 2
            if (i == 1) {
                //  Si el cosmonauta 3 no está visible
                if (integrantes[i+1].style.display == "none") {
                    //  Lo deja de mostrar, así como desaparece el botón de eliminar; por último hace que se muestre el botón agregar sin posición flotante, para que esté centrado
                    integrantes[i].style.display = "none";
                    botonEliminar.style.display = "none";
                    botonAgregar.style.float = "none";
                    botonEliminar.style.float = "none";
                    //  Verifica los elementos anteriores que son igual a 4: equipo, libro y cosmonauta 1 (nombre y mail)
                    Verificar(4);
                    //  Resetea los campos del cosmonauta 2
                    for (var i = 0; i < camposNecesarios.length; i++)
                        if (i > 3 && i < 6 )
                            camposNecesarios[i].value = "";     
                    for (var i = 0; i < camposOtros.length; i++)
                        if (i > 3 && i < 8 )
                            camposOtros[i].value = ""; 
                    break;
                }
            }
            //  Si es el cosmonauta 3
            else if (i == 2) {
                //  Si el cosmonauta 4 no está visible
                if (integrantes[i+1].style.display == "none") {
                    //  Lo deja de mostrar, así como desaparece el botón de eliminar; por último hace que se muestre el botón agregar sin posición flotante, para que esté centrado
                    integrantes[i].style.display = "none";
                    botonAgregar.style.display = "inherit";
                    botonAgregar.style.float = "left";
                    botonEliminar.style.float = "right";
                    //  Verifica los elementos anteriores que son igual a 6: equipo, libro, cosmonauta 1 (nombre y mail) y cosmonauta 2 (nombre y mail)
                    Verificar(6);
                    //  Resetea los campos del cosmonauta 3
                    for (var i = 0; i < camposNecesarios.length; i++)
                        if (i > 5 && i < 8 )
                            camposNecesarios[i].value = "";
                    for (var i = 0; i < camposOtros.length; i++)
                        if (i > 7 && i < 12 )
                            camposOtros[i].value = ""; 
                    break;
                }
            }
            //  Si es el cosmonauta 4
            else {
                //  Lo deja de mostrar, así como muestra los botones de agregar y eliminar de manera flotante
                integrantes[i].style.display = "none";
                botonAgregar.style.display = "inherit";
                botonAgregar.style.float = "left";
                botonEliminar.style.float = "right";
                //  Verifica los elementos anteriores que son igual a 8: equipo, libro, cosmonauta 1 (nombre y mail), cosmonauta 2 (nombre y mail) y cosmonauta 3 (nombre y mail)
                Verificar(8);
                //  Resetea los campos del cosmonauta 4
                for (var i = 0; i < camposNecesarios.length; i++)
                    if (i > 7)
                        camposNecesarios[i].value = "";
                for (var i = 0; i < camposOtros.length; i++)
                    if (i > 11 )
                        camposOtros[i].value = ""; 
                break;
            }
        }
    }
}

//  Para habilitar el botón de enviar, la función se activa cada vez que se hace un cambio a un campo necesario
function Habilitar () {
    
    var todosOK = 4,
        camposNecesarios = document.getElementsByClassName("camposNecesarios");
    
    //  Verifica los elementos
    function Verificar (cuenta) {
        var max = cuenta;
        for (var i = 0; i < max; i++) {
            if (camposNecesarios[i].value != "") {
                cuenta--;
            }
        }
        //  Si todos están llenos se deshabilita el botón
        if (cuenta == 0)
            botonEnviar.disabled = false;
        else
            botonEnviar.disabled = true;
    }
    
    //  Para determinar cuáles verificar
    for (var i = 0; i < camposNecesarios.length; i++) {
        if (i < 2 || camposNecesarios[i].parentElement.style.display == "inherit") {
            // Aumenta la cuenta si se agregaron más cosmonautas
            switch (i) {
                case 4:
                    todosOK += 2;
                    break;
                case 6:
                    todosOK += 2;
                    break;
                case 8:
                    todosOK += 2;
                    break;
            }
        }
    }
    
    Verificar(todosOK);
}

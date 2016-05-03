var animationEndAsignado,
    animaciones,
    identificadorActual,
    identificadorBoton,
    titular,
    auxiliar,
    botones,
    historial = []
    movimientos = 0;

function AlCargar ()
{   
    var regresar = document.getElementById("regresar"),
        inicioDIV = document.getElementsByClassName("boton");
    
    AsignacionAnimationEnd();
    Alimentacion();
    
    regresar.addEventListener("click", function(){
        Clic(this.id);
    });
    
    for (var i = 0; i < inicioDIV.length; i++)
    {
        inicioDIV[i].onclick = function () {
            Clic(this.id);
        }
    }
    
    AnimacionIntro();
}

function Alimentacion ()
{
    var contenidos =    [
                            ["tituloPagina", tituloPagina],
                            ["encabezado",encabezado],
                            ["inicio",inicio],
                            ["categoria6",categoria6],
                            ["aceptar",aceptar],
                            ["siOno",siOno],
                            ["pie", pie],
                            ["c0v00",c0v00],
                            ["c1v00",c1v00],
                            ["c1v01",c1v01],
                            ["c1v02",c1v02],
                            ["c1v03",c1v03],
                            ["c1v04",c1v04],
                            ["c1v05",c1v05],
                            ["c1v06",c1v06],
                            ["c1v07",c1v07],
                            ["c1v08",c1v08],
                            ["c1v09",c1v09],
                            ["c1v10",c1v10],
                            ["c2v00",c2v00],
                            ["c2v01",c2v01],
                            ["c2v02",c2v02],
                            ["c3v00",c3v00],
                            ["c3v01",c3v01],
                            ["c3v02",c3v02],
                            ["c4v00",c4v00],
                            ["c4v01",c4v01],
                            ["c4v02",c4v02],
                            ["c5v00",c5v00],
                            ["c5v01",c5v01],
                            ["c5v02",c5v02],
                            ["c5v03",c5v03],
                            ["c6v00",c6v00],
                            ["c6v01",c6v01],
                            ["c6v02",c6v02],
                            ["c6v03",c6v03],
                            ["c6v04",c6v04],
                            ["c6v05",c6v05],
                            ["c6v06",c6v06],
                            ["c6v07",c6v07],
                            ["c6v08",c6v08],
                            ["c6v09",c6v09],
                            ["c6v10",c6v10],
                            ["c6v11",c6v11],
                            ["c7v00",c7v00],
                            ["c7v01",c7v01],
                            ["c7v02",c7v02],
                            ["c7v03",c7v03],
                            ["c7v04",c7v04]
                        ];
    
    for (var i = 0; i < contenidos.length; i++)
    {
        var claseNombre = contenidos[i][0],
            clase = document.getElementsByClassName(claseNombre);
        
        for (var j = 0; j < clase.length; j++)
        {
            clase[j].innerHTML = contenidos[i][1][j];
        }
    }
}

function PrefijoProveedor()
{
    if('result' in arguments.callee) return arguments.callee.result;

    var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;

    var someScript = document.getElementsByTagName('script')[0];

    for(var prop in someScript.style)
    {
        if(regex.test(prop))
        {
            return arguments.callee.result = prop.match(regex)[0];
        }

    }

    if('WebkitOpacity' in someScript.style) return arguments.callee.result = 'Webkit';
    if('KhtmlOpacity' in someScript.style) return arguments.callee.result = 'Khtml';

    return arguments.callee.result = '';
}

function AsignacionAnimationEnd ()
{
    var prefijo = PrefijoProveedor()

    if (prefijo == "Webkit")
        animationEndAsignado = "webkitAnimationEnd";
    else
       animationEndAsignado = "animationend";
}

function AnimacionIntro ()
{
    var animacionContenedor = [];
    
    animaciones = document.getElementsByClassName("animated");
    
    for (var i = 0; i < animaciones.length; i++)
    {
        switch (i)
        {
            case 0:
                animacionContenedor.push(animaciones[i]);
                animaciones[i].classList.add("slideInDown");
                break;
            case 1:
                animacionContenedor.push(animaciones[i]);
                setTimeout(function(){
                    animacionContenedor[1].style.opacity = 1;
                    animacionContenedor[1].classList.add("fadeIn");
                    animacionContenedor[1].addEventListener(animationEndAsignado, function(){
                        animacionContenedor[1].classList.remove("fadeIn");
                    });
                }, 1000);
                break;
            case 2:
                animacionContenedor.push(animaciones[i]);
                animaciones[i].classList.add("slideInUp");
                break;
        }
        
        animaciones[i].addEventListener(animationEndAsignado, function(){
            animacionContenedor[0].removeAttribute("class"); 
            animacionContenedor[2].removeAttribute("class"); 
        });
    }
}

function Animacion ()
{
    var principal = document.getElementById("principal");
    
    principal.classList.add("fadeOut");
    principal.addEventListener(animationEndAsignado, function(){
        principal.classList.remove("fadeOut");
        principal.classList.add("fadeIn");
        principal.addEventListener(animationEndAsignado, function(){
            principal.classList.remove("fadeIn");
        });
    });
}

function Clic (elemento)
{   
    var regresar = document.getElementById("regresar"),
        categoria,
        ventana;
    
    if (identificadorBoton != null)
    {
        identificadorActual = identificadorBoton;
    }
    else
    {
        identificadorActual = document.getElementsByTagName("h2")[0].id;
    }
    
    if (elemento != "regresar")
    {   
        identificadorBoton = elemento;
        
        if (identificadorBoton != "c0v00")
        {
            //  Si el avance no es para resetearlo todo con el botón de «Aceptar»
            
            historial.push(identificadorActual);
            movimientos++;

            setTimeout(function (){
                regresar.style.visibility = "visible";
            }, 250);
        }
        else
        {
            //  Si el avance es para resetearlo todo con el botón de «Aceptar»
            
            historial = [];
            movimientos = 0;

            setTimeout(function (){
                regresar.style.visibility = "hidden";
            }, 250);
        }
    }
    else
    {   
        //  Si es el botón de «Regresar»
        
        identificadorBoton = historial[historial.length - 1];
        historial.pop();
        movimientos--;
        
        if (historial.length == 0)
        {
            setTimeout(function (){
                regresar.style.visibility = "hidden";
            }, 250);
        }
    }
    
    categoria = parseInt(identificadorBoton.toString().substring(1));
    ventana = identificadorBoton.toString().substring(3,5);

    titular = "<h2 id='c" + categoria + "v" + ventana + "' class='c" + categoria + "v" + ventana + "'></h2>";
    auxiliar = window[identificadorBoton][1];
    botones = window[identificadorBoton][2];
    
    Animacion();
    
    setTimeout(function(){
        var titularDIV = document.getElementById("titular"),
            auxiliarDIV = document.getElementById("auxiliar"),
            botonesDIV = document.getElementById("botones");
        
        titularDIV.innerHTML = titular;
        auxiliarDIV.innerHTML = auxiliar;
        botonesDIV.innerHTML = botones;
        
        Alimentacion();
    }, 250);
}
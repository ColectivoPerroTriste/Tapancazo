var tituloPagina    =   [
                            "Expresiones numéricas"
                        ],
    encabezado      =   [
                            "¿Cifra o numeral?",
                            "Redacción de las expresiones numéricas"
                        ],
    inicio          =   [
                            "Número entero",
                            "Número entero con decimal",
                            "Número decimal",
                            "Número fracionario",
                            "Porcentaje",
                            "Fecha",
                            "Hora"
                        ],
    categoria6      =   [
                            "Fecha completa",
                            "Fecha histórica o festival",
                            "Década",
                            "Año"
                        ],
    siOno           =   [
                            "Sí",
                            "No"
                        ],
    aceptar         =   [
                            "Aceptar"
                        ],
    pie             =   [
                            "Guía basada en la <i>Ortografía</i> de la <span class='versalita'>rae</span> del 2010."
                        ],
    
    //  Estos son atajos para evitar escribir lo mismo, que dan mayor control y evitan menos confusión, como se verá más adelante.
    
    siOnoBoton1     =   "<div class='boton' id='";
    siOnoBoton2     =   "' onclick='Clic(this.id);'><h3><a class='siOno'></a></h3></div><div class='boton' id='";
    siOnoBoton3     =   "' onclick='Clic(this.id);'><h3><a class='siOno'></a></h3></div>";
    aceptarBoton    =   "<div class='boton' id='c0v00' onclick='Clic(this.id);'><h3><a class='aceptar'></a></h3></div>",
    porEj           =   "Por ejemplo:",
    expresionTipo   =   "Selecciona el tipo de expresión",
    tecnico1        =   "¿Se trata de un contexto técnico o de un listado?",
    tecnico2        =   "<p>" + porEj + " un artículo científico, un manual o una lista de ingredientes.</p>",
    comaOpunto      =   "<ul><li>Atención: Tanto la <span style='font-variant: small-caps;'>rae</span> como la norma <span style='font-variant: small-caps;'>iso</span> 31-0 admiten el uso de la coma o del punto como separadores decimales, aunque la <span style='font-variant: small-caps;'>rae</span> considera preferible el uso del punto.</li></ul>",
    prefOpcional1   =   "<ul><li>Preferente:",
    prefOpcional2   =   "</li><li>Opcional:",
    prefOpcional3   =   "</li></ul>",
    atencion        =   "<ul><li>Atención:",
    
    /*
        A continuación vienen los contenidos de las ventanas modales.
        
        1. Nomenclatura: «cXvYY».
            a. La «c» corresponde a la categoría. Es solo para dejar explícito que a continuación se habla de un número de categoría.
            b. La «X» corresponde al número de categoría. Hay 8 categorías, la 0 corresponde a la pantalla de inicio; la 1, a la categoría «Número entero», y así sucesivamente según el orden de «inicio».
            c. La «v» corresponde a la ventana. Es solo para dejar explícito que a continuación se habla de un número de ventana.
            d. La «YY» corresponde al número de ventana. Dependiendo las categorías, son el número de ventanas modales, para el criterio de su numeración se trabajó sobre el tercer borrador del «Esquema para visualización no interactiva».
        2. Cantidad de elementos: 3.
            a. El primero corresponde al título.
            b. El segundo corresponde al texto auxiliar.
            c. El tercero corresponde a los botones.
        3. Cuestiones a considerar.
            a. En el título solo pónganse etiquetas para resalte tipográfico.
            b. Se ponen las etiquetas HTML, porque su estructura puede llegar a variar.
            c. Ignorar el contenido de los botones, sus textos están contenidos en «inicio», «categoria6», «siOno» y «aceptar».
    */
        
    c0v00           =   [
                            expresionTipo,
                            "",
                            "<div class='boton' id='c1v00' onclick='Clic(this.id)'><h3><a class='inicio'></a></h3></div><div class='boton' id='c2v00' onclick='Clic(this.id)'><h3><a class='inicio'></a></h3></div><div class='boton' id='c3v00' onclick='Clic(this.id)'><h3><a class='inicio'></a></h3></div><div class='boton' id='c4v00' onclick='Clic(this.id)'><h3><a class='inicio'></a></h3></div><div class='boton' id='c5v00' onclick='Clic(this.id)'><h3><a class='inicio'></a></h3></div><div class='boton' id='c6v00' onclick='Clic(this.id)'><h3><a class='inicio'></a></h3></div><div class='boton' id='c7v00' onclick='Clic(this.id)'><h3><a class='inicio'></a></h3></div><script>Alimentacion();</script>"
                        ],
    c1v00           =   [
                            "¿La expresión se pospone al sustantivo que refiere o identifica un elemento dentro de una serie?",
                            "<p>" + porEj + " <i>página&nbsp;3</i>.</p>",
                            siOnoBoton1 + "c1v06" + siOnoBoton2 + "c1v01" + siOnoBoton3
                        ],
    c1v01           =   [
                            "¿La expresión es menor o igual a cien o a tres palabras?",
                            "<p>" + porEj + "</p><ul><li><i>98</i> es menor a cien.</li><li><i>123</i> se conforma de dos palabras: «ciento&nbsp;veintitrés».</li></ul>",
                            siOnoBoton1 + "c1v03" + siOnoBoton2 + "c1v02" + siOnoBoton3
                        ],
    c1v02           =   [
                            "¿Se trata de una expresión aproximada o una locución?",
                            "<p>" + porEj + "</p><ul><li><i>Se levantó a las seis y algo</i>.</li><li><i>Te he repetido un millón de veces que no puedes llegar a las mil y quinientas</i>.</li></ul>",
                            siOnoBoton1 + "c1v08" + siOnoBoton2 + "c1v10" + siOnoBoton3
                        ],
    c1v03           =   [
                            "¿Le sigue una unidad de medida o una abreviatura?",
                            "<p>" + porEj + "</p><ul><li><i>35&nbsp;ºC</i>.</li><li><i>21&nbsp;gr</i>.</li><li><i>45&nbsp;págs</i>.</li></ul>",
                            siOnoBoton1 + "c1v05" + siOnoBoton2 + "c1v09" + siOnoBoton3
                        ],
    c1v04           =   [
                            tecnico1,
                            tecnico2,
                            siOnoBoton1 + "c1v07" + siOnoBoton2 + "c1v09" + siOnoBoton3
                        ],
    c1v05           =   [
                            "¿La unidad de medida es un símbolo?",
                            "<p>" + porEj + " <i>21&nbsp;g</i>.</p>",
                            siOnoBoton1 + "c1v10" + siOnoBoton2 + "c1v04" + siOnoBoton3
                        ],
    c1v06           =   [
                            "",
                            "<p>Cifra sin espacio. " + porEj + " <i>verso&nbsp;1234</i>.</p>",
                            aceptarBoton
                        ],
    c1v07           =   [
                            "",
                            prefOpcional1 + " cifra sin espacio. " + porEj + " <i>1234</i>." + prefOpcional2 + " si la cifra tiene más de cuatro dígitos, con espacio cada tres. " + porEj + " <i>12&nbsp;345</i>." + prefOpcional3,
                            aceptarBoton
                        ],
    c1v08           =   [
                            "",
                            "<p>Numeral. " + porEj + " <i>En organización, es la número uno</i>.</p>",
                            aceptarBoton
                        ],
    c1v09           =   [
                            "",
                            prefOpcional1 + " numeral. " + porEj + " <i>Él tiene cuarenta y dos años</i>, <i>Me quedan mil ciento veintitrés pesos</i>." + prefOpcional2 + " cifra con espacios si no es número redondo y tiene más de cuatro dígitos. " + porEj + " <i>Me quedan 12&nbsp;345</i>." + prefOpcional3,
                            aceptarBoton
                        ],
    c1v10           =   [
                            "",
                            "<p>Cifra. Si tiene más de cuatro dígitos se recomienda agregar espacio cada tres. " + porEj + " <i>12&nbsp;345</i>.</p>",
                            aceptarBoton
                        ],
    c2v00           =   [
                            tecnico1,
                            tecnico2,
                            siOnoBoton1 + "c2v01" + siOnoBoton2 + "c2v02" + siOnoBoton3
                        ],
    c2v01           =   [
                            "",
                            "<p>Cifra. " + porEj + " <i>1.03</i>.</p>" + comaOpunto,
                            aceptarBoton
                        ],
    c2v02           =   [
                            "",
                            prefOpcional1 + " cifra. " + porEj + " <i>1.34</i>." + prefOpcional2 + " numeral.<ul><li>Entero más «y» o «con», más la parte decimal. " + porEj + " <i>treinta con veintiocho</i> o <i>treinta y veintiocho</i>.</li><li>Entero más «punto» o «coma», más la parte decimal. " + porEj + " <i>dos punto cinco</i> o <i>dos coma cinco</i>.</li><li>Si se trata de una mitad, entonces puede usarse la expresión «y medio». " + porEj + " <i>dos y medio</i>.</li></ul>" + prefOpcional3,
                            aceptarBoton
                        ],
    c3v00           =   [
                            tecnico1,
                            tecnico2,
                            siOnoBoton1 + "c3v01" + siOnoBoton2 + "c3v02" + siOnoBoton3
                        ],
    c3v01           =   [
                            "",
                            "<p>Cifra. " + porEj + " <i>0.03</i>.</p>" + comaOpunto,
                            aceptarBoton
                        ],
    c3v02           =   [
                            "",
                            prefOpcional1 + " cifra. " + porEj + " <i>0.34</i>." + prefOpcional2 + " numeral.<ul><li>Entero más «y» o «con», más la parte decimal. " + porEj + " <i>cero con veintiocho</i> o <i>cero y veintiocho</i>.</li><li>Entero más «punto» o «coma», más la parte decimal. " + porEj + " <i>cero punto cinco</i> o <i>cero coma cinco</i>.</li><li>Es posible no mencionar el cero. " + porEj + " <i>cincuenta y ocho centésimas</i> o <i>punto cinco</i>.</li></ul>" + prefOpcional3,
                            aceptarBoton
                        ],
    c4v00           =   [
                            tecnico1,
                            tecnico2,
                            siOnoBoton1 + "c4v01" + siOnoBoton2 + "c4v02" + siOnoBoton3
                        ],
    c4v01           =   [
                            "",
                            prefOpcional1 + " expresión en decimales. " + porEj + " <i>0.5 kg de harina</i>." + prefOpcional2 + " cifra en quebrados. " + porEj + " <i>½ kg de harina</i>." + prefOpcional3,
                            aceptarBoton
                        ],
    c4v02           =   [
                            "",
                            "<p>Numeral. " + porEj + " <i>medio kilogramo de harina</i> o <i>un octavo de pulgada</i>.</p>",
                            aceptarBoton
                        ],
    c5v00           =   [
                            tecnico1,
                            tecnico2,
                            siOnoBoton1 + "c5v01" + siOnoBoton2 + "c5v02" + siOnoBoton3
                        ],
    c5v01           =   [
                            "",
                            "<p>Cifra con espacio y con símbolo. " + porEj + " <i>13&nbsp;%</i> o <i>13.3&nbsp;%</i>.</p>" + comaOpunto,
                            aceptarBoton
                        ],
    c5v02           =   [
                            "¿Se trata de un número entero?",
                            "<p>" + porEj + " <i>60&nbsp;%</i>.</p>",
                            siOnoBoton1 + "c5v03" + siOnoBoton2 + "c5v01" + siOnoBoton3
                        ],
    c5v03           =   [
                            "",
                            prefOpcional1 + "<ul><li>Cifra con espacio y con símbolo. " + porEj + " <i>13&nbsp;%</i>.</li><li>Numeral más «por ciento». " + porEj + " <i>trece por ciento</i>.</li></ul>" + prefOpcional2 + " cifra más «por ciento». " + porEj + " <i>13 por ciento</i>." + prefOpcional3,
                            aceptarBoton
                        ],
    c6v00           =   [
                            expresionTipo,
                            "",
                            "<div class='boton' id='c6v01' onclick='Clic(this.id)'><h3><a class='categoria6'></a></h3></div><div class='boton' id='c6v05' onclick='Clic(this.id)'><h3><a class='categoria6'></a></h3></div><div class='boton' id='c6v03' onclick='Clic(this.id)'><h3><a class='categoria6'></a></h3></div><div class='boton' id='c6v04' onclick='Clic(this.id)'><h3><a class='categoria6'></a></h3></div><script>Alimentacion();</script>"
                        ],
    c6v01           =   [
                            tecnico1,
                            tecnico2,
                            siOnoBoton1 + "c6v09" + siOnoBoton2 + "c6v02" + siOnoBoton3
                        ],
    c6v02           =   [
                            "¿Se quiere una expresión abreviada?",
                            "",
                            siOnoBoton1 + "c6v10" + siOnoBoton2 + "c6v06" + siOnoBoton3
                        ],
    c6v03           =   [
                            "¿Se quiere una expresión abreviada?",
                            "",
                            siOnoBoton1 + "c6v11" + siOnoBoton2 + "c6v07" + siOnoBoton3
                        ],
    c6v04           =   [
                            "¿Se quiere una expresión abreviada?",
                            "",
                            siOnoBoton1 + "c6v12" + siOnoBoton2 + "c6v08" + siOnoBoton3
                        ],
    c6v05           =   [
                            "",
                            "<p>Fórmula: [día] de [mes]. " + porEj + " <i>10 de Mayo</i> o <i>Diez de Mayo</i>.</p><ul><li>El día puede escribirse con cifra o numeral con mayúscula inicial.</li><li>El mes se escribe con mayúscula inicial.</li></ul>",
                            aceptarBoton
                        ],
    c6v06           =   [
                            "",
                            "<p>Fórmula: [día] de [mes] de [año]. " + porEj + " <i>7 de septiembre de 1991</i>.<ul><li>El día y el año se escriben con cifra.</li><li>El mes no lleva mayúscula inicial.</li></ul></p>",
                            aceptarBoton
                        ],
    c6v07           =   [
                            "",
                            "<p>Numeral siempre en singular. " + porEj + " <i>Ella nació en los noventa</i>.</p>",
                            aceptarBoton
                        ],
    c6v08           =   [
                            "",
                            "<p>Cifra sin espacios. " + porEj + " <i>En 1910 fue la Revolución mexicana</i>.</p>",
                            aceptarBoton
                        ],
    c6v09           =   [
                            "",
                            "<p>Fórmula: [día]-[mes]-[año]. " + porEj + " <i>07-09-1991</i>.<ul><li>En ningún caso se pueden omitir dígitos.</li></ul></p>",
                            aceptarBoton
                        ],
    c6v10           =   [
                            "",
                            "<p>Fórmula: [día][x][mes][x][año]. " + porEj + " <i>07/09/1991</i>, <i>7-9-1991</i> o <i>7.9.91</i></p><ul><li>El día y el mes pueden escribirse con uno o dos dígitos.</li><li>El año puede escribirse con cuatro o dos dígitos.</li><li>El símbolo de separación (<i>x</i>) puede ser «/», «-» o «.».</li></ul>",
                            aceptarBoton
                        ],
    c6v11           =   [
                            "",
                            "<p>Cifra de dos dígitos. " + porEj + " <i>La vanguardia rusa se dio durante los años 20</i>.</p><ul><li>No es admisible agregar «s» o «’s» a la cifra, como <del><i>20s</i></del> o <del><i>20’s</i></del>, ya que es un calco del inglés.</li></ul>",
                            aceptarBoton
                        ],
    c6v12           =   [
                            "",
                            "<p>Cifra de dos dígitos. " + porEj + " <i>En México nadie olvida la masacre del 68</i>.</p><ul><li>Se desaconseja el uso del apóstrofo, como <i>masacre del ’68</i>, ya que es un calco del inglés.</li></ul>",
                            aceptarBoton
                        ],
    c7v00           =   [
                            tecnico1,
                            tecnico2,
                            siOnoBoton1 + "c7v01" + siOnoBoton2 + "c7v02" + siOnoBoton3
                        ],
    c7v01           =   [
                            "",
                            "<p>Cifras con espacio y abreviatura o símbolo, sin omitir dígitos redundantes en al menos la hora y los minutos. " + porEj + " <i>03:07&nbsp;h</i>.</p>",
                            aceptarBoton
                        ],
    c7v02           =   [
                            "¿Se quiere precisión?",
                            "",
                            siOnoBoton1 + "c7v03" + siOnoBoton2 + "c7v04" + siOnoBoton3
                        ],
    c7v03           =   [
                            "",
                            "<p>Cifras con espacio y abreviatura o símbolo, omitiendo dígitos redundantes. " + porEj + " <i>3:07&nbsp;h</i> o <i>3:07&nbsp;p. m.</i></p>",
                            aceptarBoton
                        ],
    c7v04           =   [
                            "",
                            "<p>Numeral.</p><ul><li>Modelo de doce horas<ul><li>Con un tramo del día («de la mañana», «de la tarde», «de la noche» o «de la madrugada»). " + porEj + " <i>Se despertó a las ocho de la mañana</i>.</li><li>Con fracciones principales («en punto», «y cuarto», «y media», «y menos cuarto» o «cuarto para la[s]»). " + porEj + " <i>Para el ensayo los quiero a las cuarto para las seis</i>.</li><li>Con fracciones menores («menos», «para la[s]» u hora más «y», más minutos). " + porEj + " <i>El avión partió a las cuatro menos doce de la tarde</i>, <i>La cita fue al cinco para las ocho de la noche</i> o <i>El bebé nació a las dos y catorce de la madrugada</i>.</li></ul></li><li>Modelo de veinticuatro horas<ul><li>Hora más «horas». " + porEj + " <i>El correo se envío a las veinte horas</i>.</li></ul></li></ul>",
                            aceptarBoton
                        ];
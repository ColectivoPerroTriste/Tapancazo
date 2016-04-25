# Taller de digitalización

Hola, terrícola, bienvenido a la carpeta destinada para poner los materiales elaborados durante este evento.

Este taller constó de dos partes:

1. *Digitalización de las obras elegidas*. Cada uno de los participantes, en equipo o de manera individual, aprendieron digitalizar con la obra de su elección.

2. *Digitalización de los cartones de Gabriel Portillo del Toro*. Los participantes colaboraron en la digitalización de los cartones de [GPT](https://www.youtube.com/watch?v=Wh4o1HO5rPQ), lo cual forma parte de la primera fase de este proyecto.

La idea general del taller consistió en que ustedes, terrícolas, nos ayudaron en nuestro proyecto a la par que nosotros los apoyamos en este divertido mundo de la digitalización.

## Proyecto de Gabriel Portillo del Toro

GPT fue un terrícola muy querido por nosotros )`: y por ese motivo decidimos digitalizar todos sus cartones (ilustraciones) relativos a varios temas políticos o sociales que le tocaron vivir. Como deseamos difundir su obra, de manera completamente libre y accesible para todos, hemos pensado en un proyecto que comprende las siguientes fases:

1. *Digitalización*. El trabajo duro de pasar del impreso a lo digital es lo que se llevó a cabo en este taller, ¡gracias a todos por ayudarnos!

2. *Catalogación*. Para ayudar en el cotejo de todo el material digitalizado, se realizará una clasificación de los cartones; bien acomodadito para que cualquiera pueda indagar en los archivos.

3. *Subida*. A la par de la catalogación o poco después (todavía no lo decidimos :D), todo el material catalogado estará disponible en otro repositorio de Perro Triste para que cualquiera de ustedes pueda usarlo sin problemas. Además, para los terrícolas que están poco acostumbrados al uso de `git`, pero que también desean acceder a todo el material, crearemos un sistema de búsqueda hecho en RoR. (:

4. *Publicación digital*. Por último, como parte del segundo proyecto del «Taller de procesos editoriales» de este perrito, haremos una selección y a partir de ahí editaremos y desarrollaremos una publicación	 digital, libre y gratuita. Pero tardaremos un poquito, ¿sale? ¡Ah!, si tienes alguna idea de cómo puede ser, mándanos un mensajito (contacto@perrotriste.org).

## Proceso de digitalización

A sabiendas que los terrícolas constantemente discuten por el nombre de las cosas, podemos hablar que el proceso para obtener una publicación digital a partir de una obra impresa consta de dos fases:

### Obtención de la publicación digitalizada

En esta primera etapa se pasa del formato impreso a un facsímil cuyo archivo de salida es un PDF. Esto involucra las siguientes acciones:

  1. *Digitalizar*. Comprende el trabajo duro de utilizar un escáner para obtener imágenes en formato TIFF o PNG.

  2. *Enmendar*. ¿Recuerdas lo feo que tienden a quedar las copias o las imágenes de un libro escaneado? Y por si fuera poco, lo incómodo que es su lectura. Para solucionar este problema es necesario acomodar, dividir, alinear, limpiar y demás subprocesos para que nuestra imágenes queden lo más hermosas posibles y sin perder calidad gracias al formato TIFF con que terminan siendo exportadas.

  3. *OCR*. El Reconocimiento Óptico de Caracteres (OCR, por sus siglas en inglés) permite que el texto de nuestras imágenes sea localizable y seleccionable, además de que a partir de la imagen nos crea archivos PDF por cada página.

  4. *Unir*. Resuelve el inconveniente de lidiar con tantos archivos PDF al juntarse todos en un solo archivo del mismo formato.

  5. *Comprimir*. Como último paso en esta etapa, por lo regular el archivo PDF de nuestra obra digitalizada tiende a ser muy pesado. Por ello es necesario comprimirlo para que sea lo suficientemente pequeño como para distribuirlo en la red sin el inconveniente de esperar horas para su subida.

Una vez concluida esta fase, tenemos un archivo PDF que podemos ver en nuestra computadora o, ¡qué mejor!, compartirla como archivo adjunto o a través de redes P2P, LibGen o Internet Archive.

### Desarrollo de una publicación electrónica

La segunda etapa del proceso de digitalización es el traslado de un archivo PDF a un EPUB, para un manejo más sencillo y controlado del texto, ya que este formato fue creado justo para su lectura desde dispositivos digitales, no como los PDF, cuyo origen fue el de ser archivos de salida para impresión. Aquí se lleva a cabo lo siguiente:

1. *Extraer*. A partir del PDF y gracias al OCR, se extrae todo el texto de la obra digitalizada para su posterior edición y formateo.

2. *Editar*. Desafortunadamente durante la extracción de pierde el formato del texto o este queda poco uniforme, además del inconveniente de que el reconocimiento de caracteres no es del todo exacto. Por estos motivos, es necesario editar la obra para una mayor legibilidad y deleite. (;

3. *Formatear*. Una vez que se tiene el texto bien chulo, se pasa a dársele formato HTML, específicamente XHTML, para evitar cualquier tipo de ambigüedad en el marcado que nos evitará posteriores errores al crear el EPUB.

4. *Desarrollar*. Así como en la creación del PDF antes teníamos un archivo PDF por cada página, aquí en un primer momento se obtiene un archivo XHTML por cada sección del libro. Para juntarlos en un único documento, se pasa a editar otros archivos necesarios para el EPUB, como son los metadatos y demás elementos por los cuales cualquier dispositivo sabrá que ¡es un libro!

5. *Comprimir*. Como último paso, se comprime toda la carpeta que contiene los archivos, pero en lugar de que su extensión sea ZIP o RAR, como es de costumbre, su extensión y archivo final es un EPUB.

Una vez hecho todo esto ¡terminamos con el proceso de digilización! Ahora no solo tienes un PDF, sino un EPUB, más compacto y versátil, que puedes ver en tu computadora o, para ladrar más fuerte, compartirla mediante redes P2P, LibGen o Internet Archive.

¡Guau, guau!

## *Software* necesario

Aquí dejamos una lista de los programas que se necesitan para digitalizar, basándonos en los conocimientos adquiridos en CULTUR.

### Para cualquier cosmonauta

Sin importar que uses Windows, Linux, o Mac OS X se requiere de lo siguiente:

* Scan Tailor
  * Para procesar documentos digitalizados.
  * Instalación:
    * Windows y Linux (`tar.gz`): [http://scantailor.org/downloads/](http://scantailor.org/downloads/).
    * Ubuntu: desde el Centro de Software o con `sudo apt-get install scantailor` desde la terminal.
    * Mac OS X: `brew install homebrew/x11/scantailor` desde la terminal y con Homebrew (se abre desde la terminal con `scantailor’). Más adelante se indica cómo instalar Homebrew.

* Ghostscript
  * Para comprimir archivos PDF y otras cosas.
  * Instalación:
    * Windows: [http://ghostscript.com/download/gsdnld.html](http://ghostscript.com/download/gsdnld.html).
    * Linux (`tar.gz`): [http://docs.alfresco.com/4.0/tasks/Ghostscript-install.html](http://docs.alfresco.com/4.0/tasks/Ghostscript-install.html).
    * Ubuntu: `sudo apt-get install ghostscript` desde la terminal.
    * Mac OS X: `brew install ghostscript` desde la terminal y con Homebrew.
  * [Uso](http://www.tjansson.dk/2012/04/compressing-pdfs-using-ghostscript-under-linux/):
    * Linux o Mac: `gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf`.
    * Windows: `<gswin32c.exe o gswin64.exe> -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf`.

* Brackets
  * Para editar archivos HTML. Si ya cuentas con un editor HTML, *bye*, *bye*, Brackets.
  * Instalación:
    * Windows, Linux y Mac OS X: [http://brackets.io/](http://brackets.io/).

* Firefox
  * Para visualizar y verificar documentos XHTML. Cualquier explorador sirve, pero este es nuestro gallo.
  * Instalación:
    * Windows, Linux y Mac OS X: [https://www.mozilla.org/es-MX/firefox/new/](https://www.mozilla.org/es-MX/firefox/new/).

* Calibre
  * Para gestionar una biblioteca digital personal. Si ya cuentas con un visor de EPUB, no es necesario.
  * Instalación:
    * Windows, Linux y Mac OS X: [http://calibre-ebook.com/download](http://calibre-ebook.com/download).

### Según el tipo de traje de cada cosmonauta

A continuación se enumeran el *software* que no es compartido por Windows, Linux y Mac OS X, pero que nos ayudan en nuestra travesía.

#### Windows

* NAPS2
  * Para utilizar el escáner y reconocer caracteres mediante Tesseract (lo instala automáticamente).
  * Instalación: [http://www.naps2.com/download.html](http://www.naps2.com/download.html).

* SumatraPDF
  * Para visualizar documentos y exportar el texto.
  * Instalación: [http://www.sumatrapdfreader.org/download-free-pdf-viewer-es.html](http://www.sumatrapdfreader.org/download-free-pdf-viewer-es.html).

* eCanCrusher
  * Para comprimir archivos EPUB.
  * Instalación: [http://www.docdataflow.com/ecancrusher/](http://www.docdataflow.com/ecancrusher/).

#### Linux

* gscanpdf
  * Para utilizar el escáner.
  * Instalación:
    * Varios tipos de paquetes: [https://sourceforge.net/projects/gscan2pdf/files/gscan2pdf/1.3.9/](https://sourceforge.net/projects/gscan2pdf/files/gscan2pdf/1.3.9/).
    * Ubuntu: `sudo apt-get install gscan2pdf` desde la terminal.

* Tesseract
  * Para reconocer caracteres. No se te olvide instalar el lenguaje español `spa`.
  * Instalación:
    * `tar.gz`: [https://github.com/tesseract-ocr/tesseract/wiki](https://github.com/tesseract-ocr/tesseract/wiki).
    * Ubuntu: `sudo apt-get install tesseract-ocr` desde la terminal.

* pdfsam
  * Para unir o separar archivos PDF.
  * Instalación:
    * `tar.gz`: [https://github.com/torakiki/sejda/releases](https://github.com/torakiki/sejda/releases).
    * Ubuntu: desde el Centro de Software o con `sudo apt-get install pdfsam` desde la terminal.

Nota: para comprimir archivos EPUB se usa la terminal: [http://ebooks.stackexchange.com/questions/257/how-to-repack-an-epub-file-from-command-line](http://ebooks.stackexchange.com/questions/257/how-to-repack-an-epub-file-from-command-line).

#### Mac OS X

* Homebrew
  * Para facilitar la instalación de otros programas.
  * Instalación: [http://brew.sh/](http://brew.sh/).

* Tesseract
  * Para reconocer caracteres. No se te olvide instalar el lenguaje español `spa`.
  * [Instalación](https://github.com/tesseract-ocr/tesseract/wiki): `brew install tesseract --all-languages`.

* pdfsam
  * Para unir o separar archivos PDF.
  * Instalación: [http://www.pdfsam.org/download-pdfsam-basic/](http://www.pdfsam.org/download-pdfsam-basic/).

* ePub Zip/Unzip
  * Para comprimir archivos EPUB.
  * Instalación (versión 2.1.1): [http://www.mobileread.com/forums/showthread.php?t=55681](http://www.mobileread.com/forums/showthread.php?t=55681).

Nota: para escanear se utiliza el *software* del sistema. ):

### Si el cosmonauta prefiere editar en un procesador de textos

Como muchos terrícolas saben, el OCR no es cien por ciento fiel, por lo que, al desarrollar el EPUB también es necesario editar el texto reconocido...

Después de largas noches, muchas croquetas y un montón de ladridos, hemos tomado la decisión de **no usar *software* de ofimática para la edición**. ¿Para qué utilizar un procesador de texto si al final se tiene que volver a formatear el texto en HTML? ¿Para qué, si la exportación a HTML deja documentos sucios que se tardan más en limpiarse que en crearse desde cero? ¿Para qué, si el *software* de maquetación permite la importación de formatos HTML?

Sin embargo, sabemos que a muy pocos les es cómodo editar en un editor HTML. Si vas a utilizar un procesador de textos, no uses *software* privativo; no uses el feo Word (desaconsejado por los estándares UFO); usa LibreOffice, el cual está avalado por CULTUR.

* LibreOffice
  * Para editar en un procesador de textos, como última opción para el desarrollo de EPUB.
  * Instalación:
    * Windows, Linux y Mac OS X: [https://es.libreoffice.org/descarga/libreoffice-nuevo/](https://es.libreoffice.org/descarga/libreoffice-nuevo/).

## Árbol de directorios

* `EPUB-MUESTRA`. Una publicación de Perro Triste que sirve de base para desarrollar los EPUB. El EPUB (Electronic Publication, por su acrónimo en inglés) es un formato de libro electrónico de código abierto que cumple con los estándares de la World Wide Web Consortium (W3C), cuya estructura está estipulada por el International Digital Publishing Forum (IDPF). En los siguientes subdirectorios se explicará de manera superficial los archivos que comprenden un EPUB. Si te interesa saber más al respecto, se recomienda que revises lo siguiente (todo en inglés): [EPUB Zone](http://epubzone.org/), centro de información relativa al EPUB, tiene una descripción muy sencilla de lo que es un EPUB, además de noticas relacionadas a las publicaciones digitales en formato EPUB, puede verse como el sitio para el público en general y la comunidad bajo responsabilidad del IDPF; [IDPF](http://idpf.org/), centro de documentación del formato EPUB, menos amigable, pero mucho más completa; [EPUB Publications 3.0.1](http://www.idpf.org/epub/301/spec/epub-publications.html) el documento que menciona todas las especificaciones del EPUB versión 3.0.1, que está hospedada en el portal de IDPF y *What is EPUB 3?*, libro donde se describe de manera amigable lo que es el formato EPUB 3 y que aquí puedes encontrarlo con el nombre de `What_Is_EPUB_3_.epub`. Por último, aquí hay un [validador de EPUB 3](http://validator.idpf.org/), esencial para saber si nuestro EPUB está perfecto.

  * `mimetype`. Aunque no es el primer archivo de este directorio, sí es el primero en ser leído por el renderizador de EPUB (esto es igual al *software* desde donde lees el EPUB) en donde se le indica que se trata de un archivo EPUB. Parece redundante pero ¿de qué manera el renderizador sabría que se trata de un archivo EPUB? En la práctica este archivo nunca se tiene la necesidad de modificarlo.

  * `META-INF`. Esta carpeta contiene un archivo muy importante y es el primer directorio del EPUB que tiene contacto con el renderizador. En la práctica este archivo nunca se tiene la necesidad de modificarlo.

    * `container.xml`. Es el segundo archivo que lee el renderizador y es el que indica la ruta donde puede encontrar el archivo `content.opf`. Parece tener poco sentido que este archivo solo sirve para redireccionar a otro archivo, pero es el que le indica al renderizador en dónde está la relación de todo lo que contiene nuestro libro. Haciendo una analogía, el `container.xml` es el mapa para poder llegar al tesoro. En la práctica este archivo nunca se tiene la necesidad de modificarlo.

  * `OEBPS`. En esta carpeta se ponen todos los contenidos de nuestro EPUB: la relación de archivos, las tablas de contenidos, el texto en sí y, opcionalmente, hojas de estilo, fuentes (si no se quieren usar las del sistema), imágenes e incluso sonidos, imágenes y JavaScript. No existe ningún problema en ordenar los contenidos como se desee, siempre y cuando este orden esté presente en la relación de archivos. Sin embargo, es muy recomendable mantener el mayor orden posible: es más fácil navegar en un directorio muy bien ordenado que uno hecho un despapaye. Perro Triste ha optado el estándar de acomodar los archivos como a continuación se describe. En la práctica esta carpeta puede llevar otro nombre, siempre y cuando se indique la ruta en el `container.xml`; no obstante, existe un consenso en llamarla `OEBPS` (acrónimo en inglés de Open eBook Publication Structure) en honor al formato de libro OEBPS, el «padre» del formato EPUB; ¿honor a la familia?, tal vez...

    * `content.opf`. Aunque no es el primer archivo de este directorio, sí es el primero que lee el renderizador después de haber leído el `container.xml`, el cual contiene tres elementos principales: 1) metadatos que dan información general del libro como su título, fecha de creación, sinopsis, autores, editores y más, de esta manera el renderizador sabe qué información desplegar antes de abrir el libro, gracias a esto desde las bibliotecas digitales es posible saber cuál es la portada y el título de la obra, por poner un ejemplo; 2) el manifiesto en donde se da relación a todos los contenidos presentes en el libro y los cuales están contenidos en esta misma carpeta (`OEBPS`), lo cual es muy útil para que el renderizador sepa dónde encontrar cada archivo que necesite y 3) la espina que especifica el orden de lectura del libro, así el renderizador sabrá qué mostrar primero. En la práctica este archivo puede renombrarse de otra manera, siempre y cuando conserve la extensión `.opf` y esté debidamente direccionado desde el `container.xml`; sin embargo, es consenso nombrarlo `content`; además, este archivo es necesario su modificación según la obra que se trate, pero no hay por qué temerle, la mayoría del contenido es simplemente repetitivo.

    * `toc.ncx`. Tampoco es el primer archivo de este directorio, pero sí unos de los primeros en ser leídos por el renderizador. Este archivo es la tabla de contenidos para viejos renderizadores, muy útil para que el lector pueda navegar entre las secciones del libro. En la práctica también es necesario modificarlo según la obra.

    * `nav`. Una carpeta que contiene otra tabla de contenidos. En la práctica puedes prescindir de esta carpeta, pero en Perro Triste hemos optado por colocar aquí esta otra tabla.

      * `nav.xhtml`. Es la tabla de contenidos para renderizadores modernos. Es prácticamente igual al `toc.ncx`, pero dado a que es casi imposible saber qué tabla puede leer el renderizador, hay necesidad de tenerlo. En la práctica también es necesario modificarlo según la obra.

    * `xhtml`. La carpeta que contiene todas las secciones y texto del libro. En la práctica puedes prescindir de esta carpeta, pero en Perro Triste hemos optado por colocar aquí todas las secciones del libro.

      * Archivos XHTML. Todos los archivos aquí presentes varían según la estructura de la obra. Sin embargo, todos tienen la característica de ser archivos en formato XHTML. ¿Por qué XHTML y no solo HTML? Se debe a que este tipo de archivo HTML es un formato muy estricto que no permite ningún tipo de ambigüedades en las etiquetas HTML, algo muy útil si nos encontramos con renderizadores con poco soporte ante esta clase de errores. En la práctica los archivos puedes nombrarlos como quieras; sin embargo, en Perro Triste hemos optado por el consenso de colocar primero su lugar en la obra mediante un número, seguido de un guion para separarlo del nombre representativo de cada archivo. Esto es muy útil al momento de ubicar secciones en el documento, ya que de no poner su lugar o un nombre representativo, nos sería muy difícil ubicar cada sección.

    * `ttf`. Este directorio contiene todas las fuentes adicionales y que forman parte del gusto de Perro Triste. En la práctica puedes prescindir de esta carpeta y de su contenido.

      * Fuentes TrueType (TTF por su siglas en inglés). Aquí hemos colocado las fuentes que nos gustan para los libros de Perro Triste, en este caso la Lora en su versión redonda, negrita e itálica. En la práctica puedes prescindir de todos estos archivos y utilizar únicamente fuentes seguras, las cuales son las que cualquier sistema operativo contiene. Para ver cuáles son las fuentes seguras disponibles, [puedes visitar este enlace](http://www.w3schools.com/cssref/css_websafe_fonts.asp).

    * `css`. La carpeta que contiene la hoja de estilos predeterminada de Perro Triste. En la práctica puedes prescindir de este directorio y todo su contenido.

      * `principal.css`. Es la hoja de estilos de todo el libro, lo cual estipula las reglas de diseño del libro, muy conveniente para que un EPUB sea más legible y estéticamente agradable. Este archivo se vincula a cada sección del libro gracias a que se establece la relación adentro de cada archivo XHTML de la obra. En Perro Triste ya contamos con ciertos consensos sobre diseño; por ejemplo, para encabezados, párrafos, citas, listados numerados o no numerados; fuentes redondas, negritas, itálicas, en superíndice o subíndice; alineaciones justificada, izquierda, derecha, centrada o en francesa, etcétera. En la práctica puedes prescindir de este archivo, modificarlo a tu gusto, cambiarle de nombre (siempre y cuando conserve la misma extensión `.css` y lo manifiestes en el `content.opf`) o crear una nueva hoja de estilos.

    * `img`. El directorio que contiene todas las imágenes de la obra. En la práctica puedes prescindir de este directorio y todo su contenido.

      * Imágenes PNG y JPG. Además de todas las imágenes relativas a la obra de muestra, en Perro Triste existe en consenso de llamar a la portada del libro `portada.jpg`, asegurando así una correcta manifestación en el `content.opf` así como nos ahorra la necesidad de volver a vincularla en el archivo `01-portada.xhtml`. Se recomienda utilizar formatos JPG para imágenes con fondo y PNG para las que no se desea un fondo transparente. Además, antes de colocarla aquí, no es mala idea comprimir la imagen para que esté más ligera y, por lo tanto, el EPUB pese menos. Un compresor en línea de imágenes en estos formatos es [tiny jpg](https://tinyjpg.com/).

* `README.md`. Este archivo. (:

* `What_Is_EPUB_3_.epub`. Libro que explica de manera breve y concisa lo que es un EPUB versión 3. Está en inglés, pero es muy recomendable.

## ¿Qué hago si me pierdo en el cosmos?

Este documento está pensado para que tú o futuros terrícolas tengan un pequeño asteroide dónde aterrizar.

Si esto no logra orientarte, no olvides en consultar nuestras [infografías](https://github.com/ColectivoPerroTriste/Tapancazo/tree/master/infograf%C3%ADas), especialmente la que trata sobre los [procesos de digitalización](https://github.com/ColectivoPerroTriste/Tapancazo/blob/master/infograf%C3%ADas/procesos-editoriales-digitalizaci%C3%B3n/esquema-digitalizacion.svg), donde puedes ver una relación entre los pasos a seguir y los programas a utilizar según tu tipo de nave espacial.

Ve toda esta documentación como un mapa y un manual, pero si aún persisten las molestias, nuestro sombrero también es casco intergaláctico, por lo que con gusto somos tus mecánicos. Solo chíflanos a contacto@perrotriste.org.

Fin de la transmisión.
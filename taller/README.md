# Índice
* [Taller de Digitalización](#taller-de-digitalización)
  * [Proyecto de Gabriel Portillo del Toro](#proyecto-editorial-gabriel-portillo-del-toro)
  * [Proceso de digitalización](#proceso-de-digitalización)
    * [Obtención de la publicación digitalizada](#obtención-de-la-publicación-digitalizada)
    * [Desarrollo de una publicación electrónica](#desarrollo-de-una-publicación-electrónica)
  * [*Software* necesario](#software-necesario)
    * [Para cualquier cosmonauta](#para-cualquier-cosmonauta)
    * [Según el tipo de traje de cada cosmonauta](#según-el-tipo-de-traje-de-cada-cosmonauta)
      * [Windows](#windows)
      * [Linux](#linux)
      * [Mac OS X](#mac-os-x)
    * [Si el cosmonauta prefiere editar en un procesador de textos](#si-el-cosmonauta-prefiere-editar-en-un-procesador-de-textos)
  * [Árbol de directorios](#Árbol-de-directorios)
  * [¿Qué hago si me pierdo en el cosmos?](#qué-hago-si-me-pierdo-en-el-cosmos)

# Taller de Digitalización

Hola, terrícola, te damos la bienvenida a la carpeta destinada para poner los
materiales del taller llevado a cabo en el Tapancazo: Congreso Intergaláctico
de Digitalización, el cual consta de dos partes:

1. *Digitalización de las obras elegidas*. Cada participante, en equipo o de
manera individual, aprendierá digitalizar con la obra de su elección.

2. *Digitalización de los cartones de Gabriel Portillo del Toro*. Los
participantes colaborarán en la digitalización de los cartones de [GPT](https://www.youtube.com/watch?v=Wh4o1HO5rPQ), lo cual forma parte de la
primera fase de este proyecto.

La idea general del taller consiste en que ustedes nos ayuden en nuestro
proyecto, a la par que nosotras les enseñamos a digitalizar.

## Proyecto Editorial Gabriel Portillo del Toro

GPT fue un terrícola muy querido por nosotras ): y por ese motivo decidimos
digitalizar todos sus cartones (ilustraciones) relativos a varios temas
políticos o sociales de su época. Como deseamos difundir su obra, de manera
completamente libre y accesible para todas las personas, hemos pensado en un
proyecto que comprende las siguientes fases:

1. *Digitalización*. El trabajo duro de pasar de lo impreso a lo digital es lo
que se llevará a cabo en este taller. ¡Gracias por ayudarnos!

2. *Catalogación*. Para poder cotejar todo el material digitalizado se
realizará una clasificación de los cartones: dejar todo bien acomodadito para
que cualquiera pueda indagar en los archivos, incluyendo los datos necesarios
para identificar cada elemento.

3. *Subida*. A la par de la catalogación o poco después (todavía no lo
  decidimos :D), todo el material catalogado estará disponible en otro
  repositorio de Perro Triste para que cualquier persona pueda usarlo sin
  problemas. Además, para quienes están poco acostumbrados al uso de `git` pero
  también desean acceder a todo el material, crearemos una plataforma de fácil
  acceso para el público general. (:

4. *Publicación digital*. Por último, como parte del segundo proyecto del
Taller de Procesos Editoriales de este perrito, haremos una selección de los
cartones y a partir de ahí editaremos y desarrollaremos una publicación digital
abierta, libre y gratuita. Aunque probablemente tardemos un poco, ¿sale? ¡Ah!,
si tienes alguna idea o sugerencia sobre cómo hacerla, mándanos un mensajito (contacto@perrotriste.org).

## Proceso de digitalización

A sabiendas que los terrícolas constantemente discuten por el nombre de las
cosas, podemos decir que el proceso para obtener una publicación digital a
partir de una obra impresa consta de dos fases:

### Obtención de la publicación digitalizada

En esta primera etapa se pasa del formato impreso a un facsímil cuyo archivo de
salida es un PDF. Esto involucra las siguientes acciones:

  1. *Digitalizar*. Comprende el trabajo duro de utilizar un escáner para
  obtener imágenes en formato TIFF o PNG (emplear una resolución mínima de 300
    dpi).

  2. *Enmendar*. ¿Recuerdas lo feas que tienden a quedar las copias o las
  imágenes de un libro escaneado? Y, por si fuera poco, lo incómoda que es su
  lectura. Para solucionar este problema es necesario acomodar, dividir,
  alinear, recortar y limpiar, entre otros subprocesos necesarios para que
  nuestras imágenes queden lo más hermosas posibles sin perder calidad, gracias
  al formato TIFF en el que terminan siendo exportadas.

  3. *OCR*. El Reconocimiento Óptico de Caracteres (OCR, por sus siglas en
    inglés) permite que el texto de nuestras imágenes sea localizable y
    seleccionable, además de que a partir de la imagen nos crea archivos PDF
    por cada página.

  4. *Unir*. Resuelve el inconveniente de lidiar con tantos archivos PDF, al
  juntarse todos en un solo archivo del mismo formato.

  5. *Comprimir*. El archivo PDF que resulta de nuestra obra digitalizada
  tiende a ser muy pesado. Como último paso en esta etapa, es necesario
  comprimirlo para que sea lo suficientemente ligero como para distribuirlo en
  la red sin el inconveniente de esperar horas para su subida o descarga.

Una vez concluida esta fase tenemos un archivo PDF que podemos ver en nuestra
computadora o, ¡qué mejor!, compartirlo como archivo adjunto o a través de
redes [P2P](https://es.wikipedia.org/wiki/Peer-to-peer),
[LibGen](http://libgen.io/) o [Internet Archive](https://www.archive.org).

### Desarrollo de una publicación electrónica

La segunda etapa del proceso de digitalización es el traslado del archivo PDF a
formato EPUB, para un manejo más sencillo y controlado del texto, ya que este
formato fue creado justo para su lectura desde dispositivos digitales, no como
los PDF, cuyo propósito original es ser archivos de salida para impresión. En
esta etapa se llevan a cabo los siguientes pasos:

1. *Extraer*. A partir del PDF, y gracias al OCR, se extrae todo el texto de la
obra digitalizada para su posterior edición y formateo.

2. *Editar*. Desafortunadamente, durante la extracción se pierde el formato
original del texto o este queda poco uniforme, además del inconveniente de que
el reconocimiento de caracteres no es del todo exacto. Por estos motivos, es
necesario editar la obra para una mayor legibilidad y deleite. ;)

3. *Formatear*. Una vez que se tiene el texto bien chulo, el siguiente paso es
darle formato HTML; específicamente XHTML, para evitar cualquier tipo de
ambigüedad en el marcado, lo cual nos evitará posteriores errores al crear el
EPUB.

4. *Desarrollar*. Así como en la creación del PDF antes teníamos un archivo PDF
por cada página, aquí en un primer momento se obtiene un archivo XHTML por cada
sección del libro. Para juntarlos en un único documento se tienen que editar
otros archivos necesarios para el EPUB, como los metadatos y demás elementos
gracias a los cuales cualquier dispositivo sabrá que ¡es un libro!

5. *Comprimir*. Como último paso, se comprime toda la carpeta que contiene los
archivos, pero en lugar de que su extensión sea ZIP o RAR, como es costumbre,
su extensión y archivo final es un EPUB.

Una vez hecho todo esto, ¡terminamos con el proceso de digilización! Ahora no
solo tienes un PDF, sino un EPUB, más compacto y versátil, que puedes ver en tu computadora o, para ladrar más fuerte, compartir también mediante redes P2P,
LibGen o Internet Archive.

¡Guau, guau!

## *Software* necesario

Aquí dejamos una lista de los programas que se necesitan para digitalizar.

### Para cualquier cosmonauta

Sin importar si usas Windows, GNU/Linux, o Mac OS X requerirás los siguientes:

* Scan Tailor
  * Para procesar documentos digitalizados.
  * Instalación:
    * Windows y GNU/Linux (`tar.gz`): [http://scantailor.org/downloads/](http://scantailor.org/downloads/).
    * Ubuntu: desde el Centro de Software o con `sudo apt-get install
    scantailor` desde la terminal.
    * Mac OS X: `brew install homebrew/x11/scantailor` desde la terminal y con
    Homebrew (se abre desde la terminal con `scantailor`). Más adelante, en la
    sección de Mac OS X, se indica cómo instalar Homebrew.

* Ghostscript
  * Para comprimir archivos PDF y otros.
  * Instalación:
    * Windows: [http://ghostscript.com/download/gsdnld.html](http://ghostscript.com/download/gsdnld.html).
    * GNU/Linux (`tar.gz`): [http://docs.alfresco.com/4.0/tasks/Ghostscript-install.html](http://docs.alfresco.com/4.0/tasks/Ghostscript-install.html).
    * Ubuntu: `sudo apt-get install ghostscript` desde la terminal.
    * Mac OS X: `brew install ghostscript` desde la terminal y con Homebrew.
  * [Uso](http://www.tjansson.dk/2012/04/compressing-pdfs-using-ghostscript-under-linux/):
    * GNU/Linux o Mac: `gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4
    -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf
    input.pdf`.
    * Windows: `<gswin32c.exe o gswin64.exe> -sDEVICE=pdfwrite
    -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf`.

* Atom o Brackets
  * Para editar archivos HTML. Solo es necesario escoger entre alguno de los
  dos.
  * Instalación:
    * Atom para Windows, GNU/Linux y Mac OS X:
    [https://atom.io/](https://atom.io/).
    * Brackets para Windows, GNU/Linux y Mac OS X: [http://brackets.io/](http://brackets.io/).

* Firefox
  * Para visualizar y verificar documentos XHTML. Cualquier explorador sirve,
  pero este es nuestro gallo.
  * Instalación:
    * Windows, GNU/Linux y Mac OS X: [https://www.mozilla.org/es-MX/firefox/new/](https://www.mozilla.org/es-MX/firefox/new/).

* Calibre
  * Para gestionar una biblioteca digital personal. Si ya cuentas con un lector
  de EPUB, no es necesario.
  * Instalación:
    * Windows, GNU/Linux y Mac OS X: [http://calibre-ebook.com/download](http://calibre-ebook.com/download).

### Según el tipo de traje de cada cosmonauta

A continuación se enumeran los tipos de *software* que no son compartidos por
Windows, GNU/Linux y Mac OS X, pero que nos ayudarán en nuestra travesía.

#### Windows

* NAPS2
  * Para utilizar el escáner y reconocer caracteres mediante Tesseract (OCR que
    viene incluido en NAPS2).
  * Instalación: [http://www.naps2.com/download.html](http://www.naps2.com/download.html).

* SumatraPDF
  * Para visualizar documentos y exportar el texto.
  * Instalación: [http://www.sumatrapdfreader.org/download-free-pdf-viewer-es.html](http://www.sumatrapdfreader.org/download-free-pdf-viewer-es.html).

* eCanCrusher
  * Para comprimir archivos EPUB.
  * Instalación: [http://www.docdataflow.com/ecancrusher/](http://www.docdataflow.com/ecancrusher/).

#### GNU/Linux

* gscanpdf
  * Para utilizar el escáner.
  * Instalación:
    * Varios tipos de paquetes: [https://sourceforge.net/projects/gscan2pdf/files/gscan2pdf/1.3.9/](https://sourceforge.net/projects/gscan2pdf/files/gscan2pdf/1.3.9/).
    * Ubuntu: `sudo apt-get install gscan2pdf` desde la terminal.

* Tesseract
  * Para reconocer caracteres.
  * Instalación:
    * `tar.gz`: [https://github.com/tesseract-ocr/tesseract/wiki](https://github.com/tesseract-ocr/tesseract/wiki).
    * Ubuntu: `sudo apt-get install tesseract-ocr` desde la terminal y luego `sudo apt-get install tesseract-ocr-spa` para instalar el lenguaje español.

* pdfsam
  * Para unir o separar archivos PDF.
  * Instalación:
    * `tar.gz`: [https://github.com/torakiki/sejda/releases](https://github.com/torakiki/sejda/releases).
    * Ubuntu: desde el Centro de Software o con `sudo apt-get install pdfsam`
    desde la terminal.

Nota: para comprimir archivos EPUB se usa la terminal: [http://ebooks.stackexchange.com/questions/257/how-to-repack-an-epub-file-from-command-line](http://ebooks.stackexchange.com/questions/257/how-to-repack-an-epub-file-from-command-line).

#### Mac OS X

* Homebrew
  * Para facilitar la instalación de otros programas.
  * Instalación: [http://brew.sh/](http://brew.sh/).

* Tesseract
  * Para reconocer caracteres. No olvides instalar por lo menos el lenguaje
  español `spa`.
  * [Instalación](https://github.com/tesseract-ocr/tesseract/wiki): `brew
  install tesseract --all-languages`.

* pdfsam
  * Para unir o separar archivos PDF.
  * Instalación: [http://www.pdfsam.org/download-pdfsam-basic/](http://www.pdfsam.org/download-pdfsam-basic/).

* ePub Zip/Unzip
  * Para comprimir archivos EPUB.
  * Instalación (versión 2.1.1): [http://www.mobileread.com/forums/showthread.php?t=55681](http://www.mobileread.com/forums/showthread.php?t=55681).

Nota: para escanear se utiliza el *software* del sistema. ):

### Si el cosmonauta prefiere editar en un procesador de textos

Como muchos terrícolas saben, el OCR no es cien por ciento fiel, por lo que al
desarrollar el EPUB también es necesario editar el texto reconocido...

Después de largas noches, muchos pozos cavados y un montón de aullidos, hemos
tomado la decisión de **no usar *software* de ofimática para la edición**.
¿Para qué utilizar un procesador de textos si al final se tiene que formatear
de vuelta el texto en HTML? ¿Para qué, si la exportación a HTML deja documentos
sucios que tardan más en limpiarse que en crearse desde cero? ¿Para qué, si el
*software* de maquetación permite la importación de formatos HTML?

Sin embargo, sabemos que no a todos les es cómodo editar directamente en HTML.
Si vas a utilizar un procesador de textos, no uses *software* privativo; no
uses el feo Word (desaconsejado por los estándares UFO). Nosotras recomendamos
LibreOffice, el cual está avalado por CULTUR.

* LibreOffice
  * Para editar en un procesador de textos, como última opción para el
  desarrollo de EPUB.
  * Instalación:
    * Windows, GNU/Linux y Mac OS X: [https://es.libreoffice.org/descarga/libreoffice-nuevo/](https://es.libreoffice.org/descarga/libreoffice-nuevo/).

## Árbol de directorios

* `EPUB-MUESTRA`. Una publicación de Perro Triste que sirve de base para
desarrollar los EPUB. El EPUB (Electronic Publication, por su acrónimo en
  inglés) es un formato de libro electrónico de código abierto que cumple con
  los estándares de la World Wide Web Consortium (W3C), cuya estructura está
  estipulada por el International Digital Publishing Forum (IDPF). En los
  siguientes subdirectorios se explicarán de manera superficial los archivos
  que incluye un EPUB. Si te interesa saber más al respecto, puedes revisar las
  siguientes ligas (todas en inglés): [EPUB Zone](http://epubzone.org/), centro
  de información relativa al EPUB. Tiene una descripción muy sencilla de lo que
  es un EPUB, además de noticas relacionadas con las publicaciones digitales en
  formato EPUB; puede verse como el sitio para el público en general y la
  comunidad bajo responsabilidad del IDPF. [IDPF](http://idpf.org/), centro de
  documentación del formato EPUB, no tan ameno como el anterior pero mucho más
  completo. [EPUB Publications 3.0.1](http://www.idpf.org/epub/301/spec/epub-publications.html), documento
  que menciona todas las especificaciones del EPUB versión 3.0.1, hospedado en
  el portal de IDPF. *What is EPUB 3?*, libro donde se describe de manera
  amigable lo que es el formato EPUB 3 y que puedes encontrar en estas carpetas
  bajo el nombre de `What_Is_EPUB_3_.epub`. Además, hay un [validador de EPUB 3](http://validator.idpf.org/), esencial para saber si nuestro EPUB está
  perfecto. En la práctica la carpeta de tu EPUB puede ser nombrada como
  prefieras, aunque lo recomendable es emplear el nombre de la obra para evitar
  confusiones.

  * `mimetype`. Aunque no es el primer archivo de este directorio, sí es el
  primero en ser leído por el renderizador de EPUB (es decir, el *software*
    desde donde lees el EPUB), en el cual se le indica que se trata de un
    archivo EPUB. Parece redundante pero ¿de qué manera el renderizador sabría
    que se trata de un archivo EPUB? En la práctica nunca es necesario
    modificar este archivo.

  * `META-INF`. Esta carpeta contiene un archivo muy importante y es el primer
  directorio del EPUB que tiene contacto con el renderizador. En la práctica
  nunca es necesario modificar este archivo.

    * `container.xml`. Es el segundo archivo que lee el renderizador y es el
    que indica la ruta donde puede encontrar el archivo `content.opf`. Parece
    tener poco sentido que este archivo solo sirva para redireccionar a otro
    archivo, pero es el que le indica al renderizador en dónde está la relación
    de todo lo que contiene nuestro libro. Haciendo una analogía, el
    `container.xml` es el mapa para poder llegar al tesoro. En la práctica
    nunca es necesario modificar este archivo.

  * `OEBPS`. En esta carpeta se ponen todos los contenidos de nuestro EPUB: la
  relación de archivos, las tablas de contenidos, el texto en sí y,
  opcionalmente, hojas de estilo, fuentes (si no se quieren usar las del
    sistema), imágenes e incluso sonidos y archivos JavaScript. Los contenidos
    se pueden acomodar de la manera que cada quién decida, siempre y cuando
    este orden esté presente en la relación de archivos. Sin embargo, es muy
    recomendable mantener el mayor orden posible: es más fácil navegar en un
    directorio muy bien ordenado que uno hecho un despapaye. Perro Triste ha
    optado el estándar de acomodar los archivos como a continuación se describe.
    En la práctica esta carpeta puede llevar otro nombre, siempre y cuando se
    indique la ruta en el `container.xml`; no obstante, existe un consenso de
    llamarla `OEBPS` (acrónimo en inglés de Open eBook Publication Structure)
    en honor al formato de libro OEBPS, el «padre» del formato EPUB; ¿honor a
    la familia?, tal vez...

    * `content.opf`. Aunque no es el primer archivo de este directorio, sí es
    el primero que lee el renderizador después de haber leído el
    `container.xml`, y contiene tres elementos principales. 1) Metadatos que
    dan información general del libro como su título, fecha de creación,
    sinopsis, autoría, edicón y otros, de manera que el renderizador sabe qué
    información desplegar antes de abrir el libro. Gracias a esto desde las
    bibliotecas digitales es posible saber cuál es la portada y el título de la
    obra, por poner un ejemplo. 2) El manifiesto en donde se da relación a
    todos los contenidos presentes en el libro y los cuales están incluidos en
    esta misma carpeta (`OEBPS`), lo cual es muy útil para que el renderizador
    sepa dónde encontrar cada archivo que necesite. 3) La espina que especifica
    el orden de lectura del libro, para que el renderizador sepa qué mostrar
    primero. En la práctica este archivo puede renombrarse de otra manera,
    siempre y cuando conserve la extensión `.opf` y esté debidamente
    direccionado desde el `container.xml`; sin embargo, es consenso nombrarlo
    `content`. Por otra parte, este archivo debe ser modificado según la obra,
    pero no hay por qué temerle, la mayoría del contenido es simplemente
    repetitivo.

    * `toc.ncx`. Tampoco es el primer archivo de este directorio, pero sí uno
    de los primeros en ser leídos por el renderizador. Este archivo es la tabla
    de contenidos para viejos renderizadores, muy útil para que el lector pueda
    navegar entre las secciones del libro. En la práctica también es necesario
    modificarlo según la obra.

    * `nav`. Una carpeta que contiene otra tabla de contenidos. En la práctica
    puedes prescindir de esta carpeta, pero en Perro Triste hemos optado por
    colocar aquí esta otra tabla.

      * `nav.xhtml`. Es la tabla de contenidos para renderizadores modernos. Es prácticamente igual al `toc.ncx`, pero dado a que es casi imposible saber
      qué tabla puede leer el renderizador, hay necesidad de tenerlo. En la
      práctica también es necesario modificarlo según la obra.

    * `xhtml`. Es la carpeta que contiene todas las secciones y textos del
    libro. En la práctica puedes prescindir de esta carpeta, pero en Perro
    Triste hemos optado por colocar aquí todas las secciones del libro.

      * Archivos XHTML. Todos los archivos aquí presentes varían según la
      estructura de la obra. Sin embargo, todos tienen la característica de ser
      archivos en formato XHTML. ¿Por qué XHTML y no solo HTML? Se debe a que
      este tipo de archivo HTML es un formato muy estricto que no permite
      ningún tipo de ambigüedades en las etiquetas HTML, algo muy útil si nos
      encontramos con renderizadores con poco soporte ante esta clase de
      errores. En la práctica los archivos pueden ser nombrados como quieras;
      sin embargo, en Perro Triste hemos optado por el consenso de colocar
      primero su lugar en la obra mediante un número, seguido de un guion para
      separarlo del nombre representativo de cada archivo. Esto es muy útil al
      momento de ubicar secciones en el documento, ya que de no poner su lugar
      o un nombre representativo, nos sería muy difícil ubicar cada sección.

    * `ttf`. Este directorio contiene todas las fuentes adicionales que forman
    parte del gusto de Perro Triste. En la práctica puedes prescindir de esta
    carpeta y de su contenido.

      * Fuentes TrueType (TTF por su siglas en inglés). Aquí hemos colocado las
      fuentes que nos gustan para los libros de Perro Triste, en este caso la
      Lora en su versión redonda, negrita e itálica. En la práctica puedes
      prescindir de todos estos archivos y utilizar únicamente fuentes seguras,
      que son las que cualquier sistema operativo contiene. Para ver cuáles son
      las fuentes seguras disponibles [puedes visitar este enlace](http://www.w3schools.com/cssref/css_websafe_fonts.asp).

    * `css`. Es la carpeta que contiene la hoja de estilos predeterminada de
    Perro Triste. En la práctica puedes prescindir de este directorio y de todo
    su contenido.

      * `principal.css`. Es la hoja de estilos de todo el libro, lo cual
      estipula las reglas de diseño del libro, muy conveniente para que un EPUB
      sea más legible y estéticamente agradable. Este archivo se vincula a cada
      sección del libro gracias a que se establece la relación adentro de cada
      archivo XHTML de la obra. En Perro Triste ya contamos con ciertos
      consensos sobre diseño; por ejemplo, para encabezados, párrafos, citas,
      listados numerados o no numerados; fuentes redondas, negritas, itálicas,
      en superíndice o subíndice; alineación justificada, izquierda, derecha,
      centrada o en francesa, etcétera. En la práctica puedes prescindir de
      este archivo, modificarlo a tu gusto, cambiarle de nombre (siempre y
        cuando conserve la misma extensión `.css`, lo manifiestes en el
        `content.opf` y lo vincules correctamente en tus archivos XHTML) o
        crear una nueva hoja de estilos.

    * `img`. El directorio que contiene todas las imágenes de la obra. En la
    práctica puedes prescindir de este directorio y todo su contenido.

      * Imágenes PNG y JPG. Además de todas las imágenes relativas a la obra de
      muestra, en Perro Triste existe en consenso de llamar a la portada del
      libro `portada.jpg`, asegurando así una correcta manifestación en el
      `content.opf`, además de que nos ahorra la necesidad de volver a
      vincularla en el archivo `01-portada.xhtml`. Se recomienda utilizar
      formatos JPG para imágenes con fondo y PNG para aquellas en las que se
      prefiere un fondo transparente. Antes de colocarla aquí, no es mala idea
      comprimir la imagen para que esté más ligera y, por lo tanto, el EPUB
      pese menos. Un compresor en línea de imágenes en estos formatos es [tiny jpg](https://tinyjpg.com/).

* `README.md`. Es este archivo. (:

* `What_Is_EPUB_3_.epub`. Libro que explica de manera breve y concisa lo que es
un EPUB versión 3.

## ¿Qué hago si me pierdo en el cosmos?

Este documento está pensado para que tú o futuros terrícolas tengan un pequeño
asteroide dónde aterrizar.

Si esto no logra orientarte, no olvides en consultar nuestras [infografías](https://github.com/ColectivoPerroTriste/Tapancazo/tree/master/infograf%C3%ADas), especialmente la que trata sobre los [procesos de digitalización](https://github.com/ColectivoPerroTriste/Tapancazo/blob/master/infograf%C3%ADas/procesos-editoriales-digitalizaci%C3%B3n/esquema-digitalizacion.svg), donde
puedes ver una relación entre los pasos a seguir y los programas para utilizar
según tu tipo de nave espacial.

Ve toda esta documentación como un mapa y un manual, pero si aún persisten las
dudas nuestro sombrero también es casco intergaláctico, por lo que con gusto
somos tus mecánicos. Solo chíflanos a contacto@perrotriste.org.

Fin de la transmisión.

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
  5. *Comprimir*. Como último paso en esta etapa, por lo regular el archivo PDF de nuestra obra digitalizada tiende a ser muy pesado. Por ello, es necesario comprimirlo para que sea lo suficientemente pequeño como para distribuirlo en la red sin el inconveniente de esperar horas para su subida.

Una vez concluida esta fase, tenemos un archivo PDF que podemos ver en nuestra computadora o, ¡qué mejor!, compartirla como archivo adjunto o a través de redes P2P, LibGen o Internet Archive.

### Desarrollo de una publicación electrónica

La segunda etapa del proceso de digitalización es el traslado de un archivo PDF a un EPUB, para un manejo más sencillo y controlado del texto, ya que este formato fue creado justo para su lectura desde dispositivos digitales, no como los PDF, cuyo origen fue el de ser archivos de salida para impresión. Aquí se lleva a cabo lo siguiente:

1. *Extraer*. A partir del PDF y gracias al OCR, se extrae todo el texto de la obra digitalizada para su posterior edición y formateo.

2. *Editar*. Desafortunadamente durante la extracción de pierde el formato del texto o este queda muy poco uniformado, además del inconveniente de que el reconocimiento de caracteres no es exacto del todo. Por estos motivos, es necesario editar la obra para su mayor legibilidad y deleite. (;

3. *Formatear*. Una vez que se tiene el texto bien chulo, se pasa a dársele formato HTML, específicamente XHTML, para evitar cualquier tipo de ambigüedad en el marcado.

4. *Desarrollar*. Así como en la creación del PDF antes teníamos un archivo PDF por cada página, aquí en un primer momento se obtiene un archivo XHTML por cada sección del libro. Para juntarlos todos en un único archivo, se pasa a desarrollar el EPUB, que no solo le da forma a la publicación digital, sino que tiene una serie de metadatos y demás elementos por los cuales cualquier lector sabrá que ¡es un libro!

5. *Comprimir*. Como último paso, todos los archivos generales se comprimen, pero en lugar de que su extensión sea ZIP o RAR, como es de costumbre, su extensión y archivo final es una carpeta comprimida en formato EPUB.

Una vez hecho todo esto ¡terminamos con el proceso de digilización! Ahora no solo tienes un PDF, sino un EPUB, más compacto y versátil, que puedes ver tu computadora o, para ladrar más fuerte, compartirla mediante redes P2P, LibGen o Internet Archive.

¡Guau, guau!

## *Software* necesario

Aquí dejamos una lista de los programas que se necesitan para digitalizar, basándonos en los conocimientos adquiridos en CULTUR.

### Para cualquier cosmonauta

Sin importar que uses Windows, Linux, o Mac OS se requiere de lo siguiente:

* Scan Tailor
  * Para procesar documentos digitalizados.
  * Instalación:
    * Windows y Linux (`tar.gz`): [http://scantailor.org/downloads/](http://scantailor.org/downloads/).
    * Ubuntu: desde el Centro de Software o con `sudo apt-get install scantailor` desde la terminal.
    * Mac OS: `brew install homebrew/x11/scantailor` desde la terminal y con Homebrew (se abre desde la terminal con `scantailor’). Más adelante se indica cómo instalar Homebrew.

* Ghostscript
  * Para comprimir archivos PDF y otras cosas.
  * Instalación:
    * Windows: [http://ghostscript.com/download/gsdnld.html](http://ghostscript.com/download/gsdnld.html).
    * Linux (`tar.gz`): [http://docs.alfresco.com/4.0/tasks/Ghostscript-install.html](http://docs.alfresco.com/4.0/tasks/Ghostscript-install.html).
    * Ubuntu: `sudo apt-get install ghostscript` desde la terminal.
    * Mac OS: `brew install ghostscript` desde la terminal y con Homebrew.
  * [Uso](http://www.tjansson.dk/2012/04/compressing-pdfs-using-ghostscript-under-linux/):
    * Linux o Mac: `gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf`.
    * Windows: `<gswin32c.exe o gswin64.exe> -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf`.

* Brackets
  * Para editar archivos HTML. Si ya cuentas con un editor HTML, *bye*, *bye*, Brackets.
  * Instalación:
    * Windows, Linux y Mac OS: [http://brackets.io/](http://brackets.io/).

* Firefox
  * Para visualizar y verificar documentos XHTML. Cualquier explorador sirve, pero este es nuestro gallo.
  * Instalación:
    * Windows, Linux y Mac OS: [https://www.mozilla.org/es-MX/firefox/new/](https://www.mozilla.org/es-MX/firefox/new/).

* Calibre
  * Para gestionar una biblioteca digital personal. Si ya cuentas con un visor de EPUB, no es necesario.
  * Instalación:
    * Windows, Linux y Mac OS: [http://calibre-ebook.com/download](http://calibre-ebook.com/download).

### Según el tipo de traje de cada cosmonauta

A continuación se enumeran el *software* que no es compartido por Windows, Linux y Mac OS, pero que nos ayudan en nuestra travesía.

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

#### Mac OS

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
    * Windows, Linux y Mac OS: [https://es.libreoffice.org/descarga/libreoffice-nuevo/](https://es.libreoffice.org/descarga/libreoffice-nuevo/).
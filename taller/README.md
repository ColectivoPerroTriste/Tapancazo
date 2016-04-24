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

Después de largas noches, muchas croquetas y un montón de ladridos, hemos tomado la decisión de **no usar *software* de ofimática para la edición**. ¿Para qué utilizar un procesador de texto si al final se tiene que volver a formatear el texto en HTML? ¿Para qué, si la exportación a HTML deja documentos limpios que más tedioso es limpiarlos que hacerlos desde un editor HTML? ¿Para qué si el *software* de maquetación permite la importación de formatos HTML?

Sin embargo, sabemos que a muy pocos les es cómodo editar en un editor HTML. Si vas a utilizar un procesador de textos, no uses *software* privativo; no uses el feo Word (desaconsejado por los estándares UFO); usa LibreOffice, el cual está avalado por CULTUR.

* LibreOffice
  * Para editar en un procesador de textos, como última opción para el desarrollo de EPUB.
  * Instalación:
    * Windows, Linux y Mac OS: [https://es.libreoffice.org/descarga/libreoffice-nuevo/](https://es.libreoffice.org/descarga/libreoffice-nuevo/).
puts "\nEste script ayuda a utilizar Tesseract en múltiples archivos PNG o TIF contenidos en una misma carpeta."
puts "Requiere tener Tesseract instalado."
puts "No olvides estar en el directorio donde quieres los archivos de salida."
puts "\nEscribe el prefijo del lenguaje a detectar"
lenguaje = gets.chomp
puts "\nArrastra la carpeta que contiene las imágenes"
carpeta = gets.chomp.strip

Dir.foreach(carpeta) do |archivo|
  if File.extname(archivo) == '.png' or File.extname(archivo) == '.tiff' or File.extname(archivo) == '.tif'
      puts "\nEjecutando Tesseract para: #{archivo}"
      comando = system ("tesseract -l #{lenguaje} #{carpeta + "/" + archivo.gsub(' ', '\ ')} #{archivo.gsub(' ', '\ ').gsub('.png', '').gsub('.tiff', '')} pdf")
      if comando == false
          puts "Al parecer tu sistema no tiene instalado Tesseract..."
      end
  end
end
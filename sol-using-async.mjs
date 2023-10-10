// solution using async
import map from 'async/map.js';
import fs from 'fs';
import { Command } from 'commander';
const program = new Command();

program
  .option('-f, --files <values...>', 'Ficheros de entrada')
  .option('-o, --output <value>', 'Fichero de salida', 'output.txt');

program.on('--help', () => {
  console.log(`
    Uso: node [nombre del script] -f [ficheros...] -o [fichero de salida]
    Ejemplo: node script.js -f file1.txt file2.txt -o output.txt
  `);
});

program.parse(process.argv);

// Usar async.map para leer los archivos en paralelo
map(program.files, (file, cb) => fs.readFile(file, { encoding: 'utf8' }, cb), (err, results) => {
  if (err) {
    console.error("Hubo un error al leer los archivos:", err);
    return;
  }

  // Concatenar los contenidos de los archivos
  const concatenatedContent = results.join("");

  // Escribir el contenido combinado en el archivo de salida
  fs.writeFile(program.output, concatenatedContent, { encoding: 'utf8' }, (err) => {
    if (err) {
      console.error("Hubo un error al escribir el archivo de salida:", err);
      return;
    }

    console.log("Los archivos se combinaron con éxito en", program.output);
  });
});

#!/usr/bin/env node
'use strict'

//node concat2.js -f f1.txt -f f2.txt -f f3.txt -o output.txt
import fs from 'fs';
let debug;

import { Command } from 'commander';
const program = new Command();

program.option('-f, --files <values...>', 'Ficheros de entrada');
program.option('-o, --output <value>', 'Fichero de salida','output.txt');
program.option('-d, --debug <value>', debug, false);

program.on('--help', () => {
  console.log(`
  Uso: node concat2.js -f [ficheros...] -o [fichero de salida]
  Ejemplo: node concat2.js -f file1.txt file2.txt -o output.txt
`);
});

program.parse(process.argv);
if (program.files.length === 0) program.help();

let asyncMap = function(inputs, fun, callback) {
  let results = [];
  let completed = 0;
  let hasErrors = false;

  inputs.forEach((input, index) => {
      fun(input, (err, result) => {
          //if (hasErrors) return;

          if (err) {
              hasErrors = true;
              callback(err);
          } else {
              results[index] = result;
              completed += 1;

              if (completed === inputs.length) {
                  callback(null, results);
              }
          }
      });
  });
}

asyncMap(program.files, (file, cb) => fs.readFile(file, { encoding: 'utf8' }, cb), (err, results) => {
  if (err) {
      console.error("Hubo un error al leer los archivos:", err);
      return;
  }

  const concatenatedContent = results.join("");

  fs.writeFile(program.output, concatenatedContent, { encoding: 'utf8' }, (err) => {
      if (err) {
          console.error("Hubo un error al escribir el archivo de salida:", err);
          return;
      }

      if (program.debug) {
          console.log("Los archivos se combinaron con éxito en", program.output);
      }
  });
}); 

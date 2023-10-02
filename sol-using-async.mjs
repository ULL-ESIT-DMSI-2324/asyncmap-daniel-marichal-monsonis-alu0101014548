// solution using async
import map from 'async/map.js';
import fs from 'fs';

import { Command } from 'commander';
const program = new Command();


program.option('-f, --files <values...>', 'Ficheros de entrada');
program.option('-o, --output <value>', 'Fichero de salida','output.txt')

program.on('--help', () => {
  /* Write help text here */
});

program.parse(process.argv);

map(program.files, (file, cb) => fs.readFile(file, cb),  function(err, results)  {
  /* Write the results to the output file */
});
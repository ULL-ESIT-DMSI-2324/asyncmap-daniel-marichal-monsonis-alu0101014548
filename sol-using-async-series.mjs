// solution using async
import { series } from 'async'
import fs from 'fs'
import process from 'process';

import { Command } from 'commander'
const program = new Command()

program.option('-f, --files <values...>', 'Ficheros de entrada')

program.on('--help', () => {
  console.log('')
  console.log('Solves the serial concat using the async module')
  console.log('Example call:')
  console.log(process.argv[1]+' -f f3.txt -f f2.txt -f f1.txt')
})

program.parse(process.argv)
if (!program.files || program.files.length === 0) program.help();

let readers = program.files.map(
    // fill it with your code
);

series(readers, function (err, results) {
  /* Fill the code */
})

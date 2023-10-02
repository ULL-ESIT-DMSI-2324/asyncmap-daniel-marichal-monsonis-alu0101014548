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
  /* Write help text here */
});
  
program.parse(process.argv);
if (program.files.length === 0) program.help();

let asyncMap = function(inputs, fun, callback){
    // Write your code here
}

asyncMap(program.files, (file, cb) => fs.readFile(file, cb),  function(err, results)  {
    /* Write your code here */
});

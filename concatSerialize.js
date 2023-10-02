'use-strict'

var fs = require('fs');

const program = require('commander');

program.option('-f, --files <values...>', 'Ficheros de entrada');
program.option('-o, --output <value>', 'Fichero de salida','output.txt')
program.parse(process.argv);

var series = function(inputs, fun, callback){
  /* Write your code here */
}

series(program.files, (file, cb) => fs.readFile(file, cb),  function(err, results)  {
  /* Write your code here */
});
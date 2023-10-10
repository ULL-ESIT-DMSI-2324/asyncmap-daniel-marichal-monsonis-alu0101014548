'use-strict'

const fs = require('fs');
const program = require('commander');

program.option('-f, --files <values...>', 'Ficheros de entrada');
program.option('-o, --output <value>', 'Fichero de salida', 'output.txt');
program.parse(process.argv);

/**
 * Lee archivos en serie y pasa los resultados al callback.
 * @param {string[]} inputs - Lista de archivos a leer.
 * @param {Function} fun - Función de lectura (debería ser `fs.readFile` en este caso).
 * @param {Function} callback - Callback para manejar el resultado.
 */
const series = function(inputs, fun, callback) {
    let results = [];
    const next = index => {
        if (index === inputs.length) {
            callback(null, results);
            return;
        }
        fun(inputs[index], (err, data) => {
            if (err) {
                callback(err);
                return;
            }
            results.push(data);
            next(index + 1);
        });
    };
    next(0);
}

series(program.files, (file, cb) => fs.readFile(file, cb), (err, results) => {
    if (err) {
        console.error("Error reading files:", err);
        return;
    }

    // Combina los resultados y escribe al archivo de salida.
    fs.writeFile(program.output, results.join('\n'), err => {
        if (err) {
            console.error("Error writing to output file:", err);
        }
    });
});

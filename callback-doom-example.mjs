// Example of the Javascript Callback hell or Pyramid of doom: Reading three files sequentially
// Read the article: https://medium.com/dsc-srm/javascript-callback-hell-or-pyramid-of-doom-4f786d14b997
import fs from 'fs';

fs.readFile('test/f1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  console.log("se leyo el 1er fichero!");

  fs.readFile('test/f2.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    console.log("se leyo el segundo fichero!");

    fs.readFile('test/f3.txt', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
      console.log("se leyo el tercer fichero!");
    });

  });

});

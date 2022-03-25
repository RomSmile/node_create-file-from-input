'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function createUserFile() {
  terminal.question('Please enter the file name ', (nameOfFile) => {
    terminal.question('Enter the content to the file ', (content) => {
      fs.writeFile(`./src/files/${nameOfFile}.txt`, content, (err) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.log(err);
        }
      });

      terminal.close();
    });
  });
}

createUserFile();

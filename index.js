/*jslint node: true */
'use strict';

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter t9 value?\n', function(answer) {
  console.log('Decoded value is :', answer);
  rl.close();
});
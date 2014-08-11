/*jslint node: true */
'use strict';

var readline = require('readline');
var t9 = require('./src');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter t9 value?\n', function(answer) {
    console.log('Decoded value is :', t9(answer));
    rl.close();
});
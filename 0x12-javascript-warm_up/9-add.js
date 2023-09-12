#!/usr/bin/node
const process = require('process');
const args = process.argv;

const firstNumber = parseInt(args[2], 10);
const secondNumber = parseInt(args[3], 10);

function add (a, b) {
  console.log(a + b);
}

add(firstNumber, secondNumber);

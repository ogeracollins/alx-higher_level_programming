#!/usr/bin/node
const process = require('process');
const args = process.argv;
const squareSize = parseInt(args[2], 10);

if (isNaN(squareSize)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < squareSize; i++) {
    for (let j = 0; j < squareSize; j++) {
      process.stdout.write('X');
    }
    console.log();
  }
}

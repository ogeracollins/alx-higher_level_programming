#!/usr/bin/node
const process = require('process');
const args = process.argv;

if (args[2] !== undefined) {
  const newInt = parseInt(args[2], 10);
  if (isNaN(newInt)) {
    console.log('Not a number');
  } else {
    console.log(`My number: ${newInt}`);
  }
} else {
  console.log('Not a number');
}

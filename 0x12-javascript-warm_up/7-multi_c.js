#!/usr/bin/node
const process = require('process');
const args = process.argv;
const printCount = parseInt(args[2], 10);

if (args[2] === undefined || isNaN(printCount)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < printCount; i++) {
    console.log('C is fun');
  }
}

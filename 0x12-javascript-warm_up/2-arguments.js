#!/usr/bin/node
const process = require('process');
const args = process.argv;
const argsLength = args.length - 2;

if (argsLength === 0) {
  console.log('No argument');
} else if (argsLength === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}

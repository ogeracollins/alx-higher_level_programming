#!/usr/bin/node
const process = require('process');
const args = process.argv;
const argsLength = args.length - 2;

if (argsLength === 0 || argsLength === 1) {
  console.log('0');
} else {
  const inputArgs = [];
  for (let i = 2; i < argsLength; i++) {
    inputArgs.push(parseInt(args[i], 10));
  }
  inputArgs.sort(function (a, b) {
    return b - a;
  });
  console.log(inputArgs[1]);
}

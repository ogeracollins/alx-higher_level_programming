#!/usr/bin/node
const process = require('process');
const args = process.argv;
const argsLength = args.length - 2;

if (argsLength === 0 || argsLength === 1) {
  console.log('0');
} else {
  const arguments = [];
  for (let i = 2; i < argsLength; i++) {
    arguments.push(parseInt(args[i], 10));
  }
  arguments.sort(function (a, b) {
    return b - a;
  });
  console.log(arguments[1]);
}

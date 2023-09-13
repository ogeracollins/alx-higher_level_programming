#!/usr/bin/node
const oldSquare = require('./5-square.js');
const process = require('process');

class Square extends oldSquare {
  charPrint (c) {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        if (c === undefined) {
          process.stdout.write('X');
        } else {
          process.stdout.write(c);
        }
      }
      console.log();
    }
  }
}

module.exports = Square;

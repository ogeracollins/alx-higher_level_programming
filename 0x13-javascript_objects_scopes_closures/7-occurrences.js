#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  
  for (let a of list) {
    if (a === searchElement) {
      count++;
    }
  }

  return count;
}

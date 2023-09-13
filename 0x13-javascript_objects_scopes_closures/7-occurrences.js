#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let count = 0;

  for (const a of list) {
    if (a === searchElement) {
      count++;
    }
  }

  return count;
};

#!/usr/bin/node
// Pring first argument

if (process.argv.length == 2){
  console.log("No argument");
}else {
  console.log(process.argv[2]);
}

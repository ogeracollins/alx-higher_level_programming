#!/usr/bin/node

let arguments = process.argv.length - 2;

if (arguments == 0){
    console.log("No argument");
}else {
    console.log(process.argv[2]);
}

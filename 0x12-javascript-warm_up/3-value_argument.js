#!/usr/bin/node

let arguments = process.argv.length - 2;

if (arguments == 0){
    console.log("No argument passed");
}else {
    console.log(`${arguments} Arguments passed`);
}

"use strict";
exports.__esModule = true;
function myTest(name) {
    if (name.length > 5) {
        return true;
    }
    else {
        return false;
    }
}
var word1 = myTest("Typescript is Epic!");
console.log(word1);
var word2 = myTest("owo");
console.log(word2);

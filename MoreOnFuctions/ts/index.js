"use strict";
// Function Type Expressions
function printString(str) {
    console.log(str);
}
function greeterFunc(func) {
    func("Hello func");
}
;
function greeterType(type) {
    // ...
}
greeterFunc(printString);
greeterType(printString);
console.log("*******************");
function doSomething(fn) {
    console.log(`${fn.description} returned ${fn(5)}`);
}
const myFunc = Object.assign((someArgs) => someArgs > 3, { description: "default description" });
doSomething(myFunc);
function fn(ctor) {
    return new ctor("hello");
}

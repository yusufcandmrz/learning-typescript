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
console.log("*******************");
// Generic Functions
function firstElement(arr) {
    return arr[0];
}
const element = firstElement(["1", "2", "3"]);
console.log(element);
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);
function longest(a, b) {
    return a.length > b.length ? a : b;
}
console.log(longest({ length: 12 }, { length: 24 }));
console.log(longest([1, 2], [1, 2, 3]));
console.log(longest("Yusuf", "Demiroz"));
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
const newArray = combine([1, 2, 3], [`4`, `5`, `6`]);
console.log(newArray);
function firstElement1(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
console.log(typeof firstElement1([1, 2, 3]));
console.log(typeof firstElement2([1, 2, 3]));
function filter1(arr, func) {
    return arr.filter(func);
}
function filter2(arr, func) {
    return arr.filter(func);
}
function greet(s) {
    console.log(`hello ${s}`);
}

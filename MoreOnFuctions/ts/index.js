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
console.log("*******************");
// Optional Parameters
function f(x) {
    if (x != null) {
        console.log(x);
    }
}
f();
f(12);
function f2(x = 10) {
    if (x != null) {
        console.log(x);
    }
}
f2();
f2(12);
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (a) => { console.log(a); });
myForEach([1, 2, 3], (a, i) => { console.log(a, i); });
console.log("*******************");
function makeDate(mOrTimeStamp, y, d) {
    return (y !== undefined && d !== undefined) ? new Date(y, mOrTimeStamp, d) : new Date(mOrTimeStamp);
}
const d1 = makeDate(123456789);
console.log(d1);
const d2 = makeDate(4, 8, 12);
console.log(d2);
function fn1() {
    // ... 
}
function len(arg) {
    return arg.length;
}
console.log(len("hello"));
console.log(len([0]));
// console.log(len(Math.random() > 0.5 ? "hello" : [0]));
function len2(x) {
    return x.length;
}
const User = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
};
console.log("*******************");
// Other Types to Know About
function fn3() {
    return;
}
function func1(x) {
    x.b();
}
function func2(x) {
    // x.b();
}
function safeParse(s) {
    return JSON.parse(s);
}
function fail(msg) {
    throw new Error(msg);
}
function fn4(x) {
    if (typeof x == "string") {
        // ...
    }
    else if (typeof x == "boolean") {
        // ...
    }
    else {
        console.log(typeof x);
    }
}
function doSomething2(f) {
    return f(1, 2, 3);
}
console.log("*******************");
// Rest Parameters and Arguments
function multiply(n, ...m) {
    return m.map((x) => x * n);
}
console.log(multiply(2, 1, 2, 3, 4, 5));
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1);
const args = [1, 2];
const angle = Math.atan2(...args);
console.log(angle);
console.log("*******************");
function sum({ a, b, c }) {
    console.log(a + b + c);
}
sum({ a: 1, b: 2, c: 3 });
console.log("*******************");
const func3 = () => {
    return true;
};
console.log(func3());
function func4() {
    // return true;
}

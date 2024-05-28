"use strict";
// any
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let obj = { x: 0 };
/*obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;*/
console.log("********************");
// Type Annotations on Variables
let myName = "Alice";
console.log("********************");
// Functions
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
// greet(25);
function getFavoriteNumber() {
    return 12;
}
function getFavoriteNumber2() {
    return __awaiter(this, void 0, void 0, function* () {
        return 12;
    });
}
const names = ["Yusuf", "Can"];
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
names.forEach((s) => {
    console.log(s.toUpperCase());
});
console.log("********************");
// Object Types
function printCoord(pt) {
    console.log(`x value is -> ${pt.x}, y value is -> ${pt.y}`);
}
printCoord({ x: 12, y: 24 });
function printName(obj) {
    // console.log(obj.last?.toUpperCase());
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
}
printName({ first: "Yusuf", last: "Demiroz" });
printName({ first: "Yusuf" });
console.log("********************");
// Union Types
function printId(id) {
    console.log(`Your id is -> ${id}`);
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        // Here, id is og type 'number'
    }
}
printId(12);
printId("24");
// printId({ myId: "48" });
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    }
    else {
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(["Yusuf", "Can"]);
welcomePeople("Yusuf");
function getFirstThree(x) {
    console.log(x.slice(0, 3));
}
getFirstThree(["Yusuf", "Taha", "Muhammet", "Sait"]);
getFirstThree("Yusuf");
console.log("********************");
function printCoord2(pt) {
    console.log(`x -> ${pt.x}, y -> ${pt.y}`);
}
printCoord2({ x: 12, y: 24 });
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Yusuf"));
console.log("********************");
function printPoint(point) {
    console.log(`x => ${point.x}, y => ${point.y}`);
}
printPoint({ x: 12, y: 24 });
console.log("********************");
// Literal Types
let x = "hello";
// x = "world";
function printText(s, alignment) {
    console.log(`s is -> ${s}, alignment is -> ${alignment}`);
}
printText("Hello", "center");
function isBigger(number1, number2) {
    /* if (number1 < number2) {
        return -1
    } else if (number1 > number2) {
        return 1;
    } else {
        return 0;
    } */
    return number1 == number2 ? 0 : number1 > number2 ? 1 : -1;
}
console.log(isBigger(12, 24));
function configure(x) {
    // ...
}
configure({ width: 100 });
configure("auto");
function handleRequest(url, method) { }
;
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
// null and undefined
function doSomething(x) {
    if (x === null) {
        // do nothing...
    }
    else {
        console.log(x.toUpperCase());
    }
}
doSomething(null);

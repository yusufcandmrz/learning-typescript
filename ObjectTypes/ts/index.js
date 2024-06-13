"use strict";
function greet(person) {
    console.log(`firstName of person is ${person.firstName}`);
}
function greet2(person) {
    console.log(`firstName of person is ${person.firstName}`);
}
function greet3(person) {
    console.log(`firstName of person is ${person.firstName}`);
}
greet({ firstName: "Yusuf", age: 25 });
greet2({ firstName: "Can", age: 25 });
greet3({ firstName: "Yusuf Can", age: 25 });
console.log("******************");
function paintShape(paintOptions) {
    console.log(paintOptions);
}
paintShape({ shape: "shape1" });
paintShape({ shape: "shape2", xPos: 12, yPos: 12 });
function paintShape2(paintOptions) {
    let xPos = paintOptions.xPos === undefined ? 0 : paintOptions.xPos;
    let yPos = paintOptions.yPos === undefined ? 0 : paintOptions.yPos;
    console.log(`xPos -> ${xPos}, yPos -> ${yPos}`);
}
paintShape2({ shape: "shape1" });
paintShape2({ shape: "shape2", xPos: 12, yPos: 12 });
function paintShape3({ shape, xPos = 0, yPos = 0 }) {
    console.log(`xPos -> ${xPos}, yPos -> ${yPos}`);
}
paintShape2({ shape: "shape1" });
paintShape2({ shape: "shape2", xPos: 12, yPos: 12 });
function doSomething(obj) {
    // obj.prop = "hello world";
}
function visitForBirthday(home) {
    home.resident.age++;
    // home.resident = {
    //     firstName: "Yusuf Can",
    //     age: 25,
    // }
}
let writablePerson = {
    firstName: "Yusuf",
    age: 25
};
let readonlyPerson = writablePerson;
writablePerson.age++;
console.log(writablePerson);
const myArray = ["Yusuf", "Can", "Demiroz"];
const secondItem = myArray[1];
console.log(secondItem);
let myArray2 = ["Yusuf", "Can", "Demiroz"];
// myArray2[1] = "";
console.log("******************");
function createSquare(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width ** 2 : 20,
    };
}
let mySquare = createSquare({ colour: "blue", "width": 100 });
console.log(mySquare);
let squareOptions = { colour: "blue", width: 100 };
let mySquare2 = createSquare(squareOptions);
console.log(mySquare2);
console.log("******************");
const cc = {
    color: "red",
    radius: 12
};
console.log(cc);
console.log("******************");
function draw(circle) {
    console.log(`color was ${circle.color}, radius was ${circle.radius}`);
}
draw({ color: "red", radius: 12 });
console.log("******************");
let x = {
    contents: "hello"
};
// if (typeof x.contents === "string") {
// console.log(x.contents.toUpperCase());
// }
console.log(x.contents.toUpperCase());
let boxA = { constents: "Hello" };
let boxB = { constents: "Hello" };
console.log(`typeof boxA: ${typeof boxA.constents}, typeof boxB: ${typeof boxB.constents}`);
function setContents(box, newContents) {
    box.constents = newContents;
}
setContents(boxA, "Hello World");
console.log(boxA);
function doSomething2(value) {
    // ...
}
let myArray3 = ["hello", "world"];
doSomething2(myArray3);
doSomething2(new Array("hello", "world"));
function doStuff(values) {
    // values.push("hello");
}
const roArray = ["red", "green", "blue"];
let x2 = [];
let y2 = [];
x2 = y2;
// y2 = x2;
function doSomething3(pair) {
    const a = pair[0];
    const b = pair[1];
}
doSomething3(["hello", 12]);
function doSomething4(stringHash) {
    const [firstItem, secondItem] = stringHash;
    console.log(`first item is ${firstItem}, second item is ${secondItem}`);
}
doSomething4(["world", 24]);
function setCoordinate(coord) {
    const [x, y, z] = coord;
    console.log(`provided coordinates had ${coord.length} dmensions`);
}
setCoordinate([12, 24, 36]);
function readButtonInput(...args) {
    const [name, version, ...input] = args;
}
function doSomething5(pair) {
    // pair[0] = "hello";
}
let point = [3, 4];
function distanceFromOrigin([x, y]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
distanceFromOrigin(point);

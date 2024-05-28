// any

let obj: any = { x: 0 };
/*obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;*/

console.log("********************")

// Type Annotations on Variables

let myName: string = "Alice";

console.log("********************")

// Functions

function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// greet(25);

function getFavoriteNumber(): number {
    return 12;
}

async function getFavoriteNumber2(): Promise<number> {
    return 12;
}

const names = ["Yusuf", "Can"];

names.forEach(function (s) {
    console.log(s.toUpperCase());
})

names.forEach((s) => {
    console.log(s.toUpperCase());
})

console.log("********************")

// Object Types

function printCoord(pt: { x: number, y: number }) {
    console.log(`x value is -> ${pt.x}, y value is -> ${pt.y}`);
}

printCoord({ x: 12, y: 24 });

function printName(obj: { first: string, last?: string }) {
    // console.log(obj.last?.toUpperCase());
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
}

printName({ first: "Yusuf", last: "Demiroz" });
printName({ first: "Yusuf" });

console.log("********************")

// Union Types

function printId(id: number | string) {
    console.log(`Your id is -> ${id}`);
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        // Here, id is og type 'number'
    }
}
printId(12);
printId("24");
// printId({ myId: "48" });

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    } else {
        console.log("Welcome lone traveler " + x)
    }
}
welcomePeople(["Yusuf", "Can"]);
welcomePeople("Yusuf");

function getFirstThree(x: string[] | string) {
    console.log(x.slice(0, 3));
}
getFirstThree(["Yusuf", "Taha", "Muhammet", "Sait"]);
getFirstThree("Yusuf");

console.log("********************")

// Type Aliases

type Point = {
    x: number,
    y: number,
}

function printCoord2(pt: Point) {
    console.log(`x -> ${pt.x}, y -> ${pt.y}`);
}
printCoord2({ x: 12, y: 24 });

type ID = number | string;

type ResultType = string;

function sayHello(name: string): ResultType {
    return `Hello ${name}`;
}
console.log(sayHello("Yusuf"));

console.log("********************")

// Interfaces

interface Point2 {
    x: number,
    y: number,
}

function printPoint(point: Point2) {
    console.log(`x => ${point.x}, y => ${point.y}`);
}
printPoint({ x: 12, y: 24 });

console.log("********************")

// Literal Types

let x: "hello" = "hello";
// x = "world";

function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(`s is -> ${s}, alignment is -> ${alignment}`)
}
printText("Hello", "center");

function isBigger(number1: number, number2: number): -1 | 0 | 1 {
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

interface Options {
    width: number,
}

function configure(x: Options | "auto") {
    // ...
}
configure({ width: 100 });
configure("auto");

function handleRequest(url: string, method: "GET" | "POST"): void { };
const req = { url: "https://example.com", method: "GET" as "GET" };
handleRequest(req.url, req.method);

// null and undefined

function doSomething(x: string | null) {
    if (x === null) {
        // do nothing...
    } else {
        console.log(x.toUpperCase());
    }
}
doSomething(null);
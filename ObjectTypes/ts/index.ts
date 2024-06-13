function greet(person: { firstName: string, age: number }) {
    console.log(`firstName of person is ${person.firstName}`);
}
interface Person {
    firstName: string,
    age: number
}
function greet2(person: Person) {
    console.log(`firstName of person is ${person.firstName}`);
}
type Person2 = {
    firstName: string,
    age: number
}
function greet3(person: Person2) {
    console.log(`firstName of person is ${person.firstName}`);
}
greet({ firstName: "Yusuf", age: 25 });
greet2({ firstName: "Can", age: 25 });
greet3({ firstName: "Yusuf Can", age: 25 });

console.log("******************")

// Property Modifiers

interface PaintOptions {
    shape: string,
    xPos?: number,
    yPos?: number
}
function paintShape(paintOptions: PaintOptions) {
    console.log(paintOptions);
}
paintShape({ shape: "shape1" });
paintShape({ shape: "shape2", xPos: 12, yPos: 12 });

function paintShape2(paintOptions: PaintOptions) {
    let xPos = paintOptions.xPos === undefined ? 0 : paintOptions.xPos;
    let yPos = paintOptions.yPos === undefined ? 0 : paintOptions.yPos;
    console.log(`xPos -> ${xPos}, yPos -> ${yPos}`);
}
paintShape2({ shape: "shape1" });
paintShape2({ shape: "shape2", xPos: 12, yPos: 12 });

function paintShape3({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
    console.log(`xPos -> ${xPos}, yPos -> ${yPos}`);
}
paintShape2({ shape: "shape1" });
paintShape2({ shape: "shape2", xPos: 12, yPos: 12 });

interface SomeType {
    readonly prop: string
}
function doSomething(obj: SomeType) {
    // obj.prop = "hello world";
}

interface Home {
    readonly resident: { firstName: string, age: number }
}
function visitForBirthday(home: Home) {
    home.resident.age++;
    // home.resident = {
    //     firstName: "Yusuf Can",
    //     age: 25,
    // }
}

interface ReadonlyPerson {
    readonly firstName: string,
    readonly age: number
}
let writablePerson: Person = {
    firstName: "Yusuf",
    age: 25
}
let readonlyPerson: ReadonlyPerson = writablePerson;
writablePerson.age++;
console.log(writablePerson);

interface StringArray {
    [index: number]: string;
}
const myArray: StringArray = ["Yusuf", "Can", "Demiroz"];
const secondItem = myArray[1];
console.log(secondItem);

interface NumberDictionary {
    [index: string]: number;

    length: number
    // firstName: string
}

interface NumberOrStringDictionary {
    [index: string]: string | number;

    length: number
    firstName: string
}

interface ReadonlyStringArray {
    readonly [index: number]: string
}
let myArray2: ReadonlyStringArray = ["Yusuf", "Can", "Demiroz"];
// myArray2[1] = "";

console.log("******************")

// Excess Property Checks

interface SquareConfig {
    color?: string,
    width?: number
}
function createSquare(config: SquareConfig): { color: string, area: number } {
    return {
        color: config.color || "red",
        area: config.width ? config.width ** 2 : 20,
    }
}
let mySquare = createSquare({ colour: "blue", "width": 100 } as SquareConfig);
console.log(mySquare);

interface SquareConfig2 {
    color?: string,
    width?: number,
    [propName: string]: any
}
let squareOptions = { colour: "blue", width: 100 };
let mySquare2 = createSquare(squareOptions);
console.log(mySquare2);

console.log("******************")

// Extending Types

interface BasicAddress {
    name?: string,
    street: string,
    city: string,
    country: string,
    postalCode: string
}
interface AddressWithUnit extends BasicAddress {
    unit: string
}

interface Colorful { color: string }
interface Circle { radius: number }
interface ColorfulCircle extends Colorful, Circle { }
const cc: ColorfulCircle = {
    color: "red",
    radius: 12
}
console.log(cc)

console.log("******************")

// Intersection Types

interface Colorful {
    color: string,
}
interface Circle {
    radius: number,
}
type ColorfulCircle2 = Colorful & Circle;

function draw(circle: Colorful & Circle) {
    console.log(`color was ${circle.color}, radius was ${circle.radius}`);
}
draw({ color: "red", radius: 12 });

console.log("******************")

// Generic Object Types

interface Box {
    contents: unknown;
}
let x: Box = {
    contents: "hello"
}
// if (typeof x.contents === "string") {
// console.log(x.contents.toUpperCase());
// }
console.log((x.contents as string).toUpperCase());

interface Box2<Type> {
    constents: Type
}
interface StringBox {
    constents: string
}
let boxA: Box2<string> = { constents: "Hello" };
let boxB: StringBox = { constents: "Hello" };
console.log(`typeof boxA: ${typeof boxA.constents}, typeof boxB: ${typeof boxB.constents}`);

function setContents<Type>(box: Box2<Type>, newContents: Type) {
    box.constents = newContents;
}
setContents(boxA, "Hello World");
console.log(boxA);

function doSomething2(value: Array<string>) {
    // ...
}
let myArray3: string[] = ["hello", "world"];
doSomething2(myArray3);
doSomething2(new Array("hello", "world"));

function doStuff(values: ReadonlyArray<string>) {
    // values.push("hello");
}

const roArray: ReadonlyArray<string> = ["red", "green", "blue"];

let x2: readonly string[] = [];
let y2: string[] = [];
x2 = y2;
// y2 = x2;

function doSomething3(pair: [string, number]) {
    const a = pair[0];
    const b = pair[1];
}
doSomething3(["hello", 12]);

function doSomething4(stringHash: [string, number]) {
    const [firstItem, secondItem] = stringHash;
    console.log(`first item is ${firstItem}, second item is ${secondItem}`);
}
doSomething4(["world", 24]);

interface StringNumberPair {
    length: 2,
    0: string,
    1: number,

    slice(start?: number, end?: number): Array<string | number>;
}

type Either2dOr3d = [number, number, number?];

function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;
    console.log(`provided coordinates had ${coord.length} dmensions`);
}
setCoordinate([12, 24, 36]);

function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
}

function doSomething5(pair: readonly [string, number]) {
    // pair[0] = "hello";
}

let point: [number, number] = [3, 4];
function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
distanceFromOrigin(point);
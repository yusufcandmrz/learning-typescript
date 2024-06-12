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
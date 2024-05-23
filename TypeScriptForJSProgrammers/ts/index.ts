// 1. Types by Inference

let helloTS = "hello TS";
console.log(helloTS);

console.log("******************");

// 2. Defining Types

interface User {
    name: string,
    id: number,
}

const user: User = {
    name: "Yusuf",
    id: 122448,
}

class UserAccount {
    name: string
    id: number

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user2: User = new UserAccount("Yusuf", 122448);
console.log(user2);

function deleteUser(user: User) {
    console.log(`${user.name} is deleted`);
}

function getAdminUser(): User {
    return { name: "Yusuf", id: 122448 }
}

deleteUser({ name: "Yusuf", id: 122448 });
const resultGetAdminUser = getAdminUser();
console.log(resultGetAdminUser);

console.log("******************");

// 3. Composing Types

// 3.1. Unions

type MyBool = true | false;
let myBool: MyBool = true;
console.log(myBool);

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

let windowState: WindowStates = "closed";
let lockState: LockStates = "locked";
let positiveOddNumberUnderTen: PositiveOddNumbersUnderTen = 1;

console.log(windowState);
console.log(lockState);
console.log(positiveOddNumberUnderTen);

function getLenght(obj: string | string[]) {
    console.log(`lenght of ${typeof obj} -> ${obj.length}`);
}

getLenght("Yusuf");
getLenght(["Yusuf", "Demiroz"]);


// 3.2. Generics

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>

const stringArray: StringArray = ["y", "u", "s", "u", "f"];
console.log(stringArray);
const numberArray: NumberArray = [1, 3, 5, 7, 9];
console.log(numberArray);
const objectWithNameArray: ObjectWithNameArray = [{ name: "Yusuf" }, { name: "Can" }];
console.log(objectWithNameArray);

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

class StringBackpack implements Backpack<string> {
    private items: string[] = [];

    add(obj: string) {
        this.items.push(obj);
    }

    get() {
        return this.items.length > 0 ? this.items[0] : "No items";
    }
}

const backPack: Backpack<string> = new StringBackpack();
backPack.add("Yusuf Demiroz");
const object = backPack.get();
console.log(object);

console.log("******************");

// Structural Type System

interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 24 };
logPoint(point);

const point3 = { x: 12, y: 24, z: 48 };
logPoint(point3);

const rect = { x: 12, y: 24, width: 48, height: 96 };
logPoint(rect);

class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const virtualPoint = new VirtualPoint(12, 24);
console.log(virtualPoint);
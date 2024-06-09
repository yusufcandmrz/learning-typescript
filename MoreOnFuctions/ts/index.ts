// Function Type Expressions

function printString(str: string) {
    console.log(str)
}
function greeterFunc(func: (str: string) => void) {
    func("Hello func");
};
type printStringType = (str: string) => void
function greeterType(type: printStringType) {
    // ...
}
greeterFunc(printString);
greeterType(printString);

console.log("*******************");

// Call Signatures

type DescribableFunction = {
    description: string,
    (someArg: number): boolean,
}

function doSomething(fn: DescribableFunction) {
    console.log(`${fn.description} returned ${fn(5)}`);
}

const myFunc: DescribableFunction = Object.assign(
    (someArgs: number) => someArgs > 3,
    { description: "default description" }
);

doSomething(myFunc);

// Construct Signatures

type SomeConstructor = {
    new(str: string): void;
}
function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}

interface CallOrConstruct {
    (n?: number): string,
    new(s: string): Date,
}

console.log("*******************");

// Generic Functions

function firstElement<Type>(arr: any[]): Type | undefined {
    return arr[0];
}
const element = firstElement(["1", "2", "3"]);
console.log(element);

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
console.log(parsed);

function longest<Type extends { length: number }>(a: Type, b: Type): Type {
    return a.length > b.length ? a : b;
}
console.log(longest({ length: 12 }, { length: 24 }));
console.log(longest([1, 2], [1, 2, 3]));
console.log(longest("Yusuf", "Demiroz"));

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
const newArray = combine<string | number>([1, 2, 3], [`4`, `5`, `6`]);
console.log(newArray);

function firstElement1<Type>(arr: Type[]): Type {
    return arr[0];
}
function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}
console.log(typeof firstElement1([1, 2, 3]));
console.log(typeof firstElement2([1, 2, 3]));

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
}
function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func): Type[] {
    return arr.filter(func);
}

function greet<Str extends string>(s: Str) {
    console.log(`hello ${s}`)
}

console.log("*******************");

// Optional Parameters

function f(x?: number) {
    if (x != null) {
        console.log(x);
    }
}
f();
f(12);

function f2(x: number = 10) {
    if (x != null) {
        console.log(x);
    }
}
f2();
f2(12);

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (a) => { console.log(a) });
myForEach([1, 2, 3], (a, i) => { console.log(a, i) })

console.log("*******************");

// Function Overloads

function makeDate(timeStamp: number): Date;
function makeDate(m: number, y: number, d: number): Date;
function makeDate(mOrTimeStamp: number, y?: number, d?: number): Date {
    return (y !== undefined && d !== undefined) ? new Date(y, mOrTimeStamp, d) : new Date(mOrTimeStamp)
}
const d1 = makeDate(123456789);
console.log(d1);
const d2 = makeDate(4, 8, 12);
console.log(d2)
// const d3 = makeDate(4, 8);

function fn1(x: string): void;
function fn1(x: string, y: string): void;
function fn1() {
    // ... 
}
// fn1()

// function fn2(x: boolean): void;
// function fn2(x: string): void;
// function fn2(x: boolean) {
//     ...
// }

// function fn2(x: boolean): boolean;
// function fn2(x: string): string;
// function fn2(x: boolean | string) {
//     return true;
// }

function len(s: string): number;
function len(arr: any[]): number;
function len(arg: any): number {
    return arg.length;
}
console.log(len("hello"));
console.log(len([0]));
// console.log(len(Math.random() > 0.5 ? "hello" : [0]));
function len2(x: string | any[]): number {
    return x.length;
}

const User = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
}

console.log("*******************");

// Other Types to Know About

function fn3() {
    return;
}

function func1(x: any) {
    x.b();
}
function func2(x: unknown) {
    // x.b();
}

function safeParse(s: string): unknown {
    return JSON.parse(s);
}

function fail(msg: string): never {
    throw new Error(msg);
}

function fn4(x: string | number) {
    if (typeof x == "string") {
        // ...
    } else if (typeof x == "boolean") {
        // ...
    } else {
        console.log(typeof x);
    }
}

function doSomething2(f: Function) {
    return f(1, 2, 3);
}

console.log("*******************");

// Rest Parameters and Arguments

function multiply(n: number, ...m: number[]) {
    return m.map((x) => x * n);
}
console.log(multiply(2, 1, 2, 3, 4, 5));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1);

const args = [1, 2] as const;
const angle = Math.atan2(...args);
console.log(angle);

console.log("*******************");

// Parameter Destructuring

type ABC = { a: number, b: number, c: number }
function sum({ a, b, c }: ABC) {
    console.log(a + b + c);
}
sum({ a: 1, b: 2, c: 3 });

console.log("*******************");

// Assignability of Functions

type voidFunc = () => void;
const func3: voidFunc = () => {
    return true;
}
console.log(func3());

function func4(): void {
    // return true;
}
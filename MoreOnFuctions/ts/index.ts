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


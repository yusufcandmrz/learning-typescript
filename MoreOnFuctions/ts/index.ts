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
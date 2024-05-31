function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + " " + input;
}
console.log(padLeft("hello", "world"));

console.log("********************")

// typeof type guards

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}
console.log(typeof null);

function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} users online`;
    } else {
        return `There is nobody here`;
    }
}
console.log(getUsersOnlineMessage(0));
console.log(getUsersOnlineMessage(1));

console.log(Boolean("hello"));
console.log(!!"Word");

/* function printAll2(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
} */

function multiplyAll(values: number[] | undefined, factor: number): number[] | undefined {
    if (!values) {
        return values
    } else {
        return values.map((x) => { return x * factor })
    }
}
console.log(multiplyAll([], 5));
console.log(multiplyAll([1, 2, 3, 4, 5], 10));

console.log("********************")

// Equality narrowing

function example(x: string | number, y: string | boolean) {
    if (x === y) {
        console.log("x and y have same type and same value");
    } else {
        console.log(`type of x -> ${typeof x} and value is ${x}, type of y -> ${typeof y} and value is ${y}`);
    }
}
example("12", "12");
example(12, "12");

interface Container {
    value: number | null | undefined;
}
function multipleValue(container: Container, factor: number) {
    if (container.value != null) {
        console.log(container.value * factor);
    }
}
multipleValue({ value: 12 }, 10);

console.log("********************")

// The in operator narrowing

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
move({
    swim() {
        console.log("animal swimming");
    },
})

console.log("********************")

// instanceof narrowing

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}
logValue(new Date());
logValue("hello");

console.log("********************")

// Assignments

let x = Math.random() < 0.5 ? 10 : "Hello World!";
// x = true;
x = 12;
console.log(x);

// Using type predicates

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
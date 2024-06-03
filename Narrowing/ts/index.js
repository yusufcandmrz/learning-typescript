"use strict";
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + " " + input;
}
console.log(padLeft("hello", "world"));
console.log("********************");
// typeof type guards
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
console.log(typeof null);
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} users online`;
    }
    else {
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
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    else {
        return values.map((x) => { return x * factor; });
    }
}
console.log(multiplyAll([], 5));
console.log(multiplyAll([1, 2, 3, 4, 5], 10));
console.log("********************");
// Equality narrowing
function example(x, y) {
    if (x === y) {
        console.log("x and y have same type and same value");
    }
    else {
        console.log(`type of x -> ${typeof x} and value is ${x}, type of y -> ${typeof y} and value is ${y}`);
    }
}
example("12", "12");
example(12, "12");
function multipleValue(container, factor) {
    if (container.value != null) {
        console.log(container.value * factor);
    }
}
multipleValue({ value: 12 }, 10);
console.log("********************");
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
move({
    swim() {
        console.log("animal swimming");
    },
});
console.log("********************");
// instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
logValue(new Date());
logValue("hello");
console.log("********************");
// Assignments
let x = Math.random() < 0.5 ? 10 : "Hello World!";
// x = true;
x = 12;
console.log(x);
// Using type predicates
function isFish(pet) {
    return pet.swim !== undefined;
}
let animal;
let randomValue = Math.random();
animal = randomValue < 0.5 ? { swim: () => console.log("The fish is swimming") } : { fly: () => console.log("The bird is flying") };
console.log(`animal is fish? ${isFish(animal)}`);
let randomValue2;
let animal2;
const zoo = [];
for (let index = 0; index < 3; index++) {
    randomValue2 = Math.random();
    animal2 = randomValue2 < 0.5 ? { swim: () => console.log("The fish is swimming") } : { fly: () => console.log("The bird is flying") };
    zoo.push(animal2);
}
const underWater = zoo.filter(isFish);
console.log(`total fishes in the zoo -> ${underWater.length}`);
console.log("********************");
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLenght ** 2;
        case "triangle":
            return (1 / 2) * shape.sideLenght * shape.height;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log(getArea({ kind: "circle", radius: 12 }));

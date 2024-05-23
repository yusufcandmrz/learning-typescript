"use strict";
// 1. Types by Inference
let helloTS = "hello TS";
console.log(helloTS);
console.log("******************");
const user = {
    name: "Yusuf",
    id: 122448,
};
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user2 = new UserAccount("Yusuf", 122448);
console.log(user2);
function deleteUser(user) {
    console.log(`${user.name} is deleted`);
}
function getAdminUser() {
    return { name: "Yusuf", id: 122448 };
}
deleteUser({ name: "Yusuf", id: 122448 });
const resultGetAdminUser = getAdminUser();
console.log(resultGetAdminUser);
console.log("******************");
let myBool = true;
console.log(myBool);
let windowState = "closed";
let lockState = "locked";
let positiveOddNumberUnderTen = 1;
console.log(windowState);
console.log(lockState);
console.log(positiveOddNumberUnderTen);
function getLenght(obj) {
    console.log(`lenght of ${typeof obj} -> ${obj.length}`);
}
getLenght("Yusuf");
getLenght(["Yusuf", "Demiroz"]);
const stringArray = ["y", "u", "s", "u", "f"];
console.log(stringArray);
const numberArray = [1, 3, 5, 7, 9];
console.log(numberArray);
const objectWithNameArray = [{ name: "Yusuf" }, { name: "Can" }];
console.log(objectWithNameArray);
class StringBackpack {
    constructor() {
        this.items = [];
    }
    add(obj) {
        this.items.push(obj);
    }
    get() {
        return this.items.length > 0 ? this.items[0] : "No items";
    }
}
const backPack = new StringBackpack();
backPack.add("Yusuf Demiroz");
const object = backPack.get();
console.log(object);
console.log("******************");
function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
const point = { x: 12, y: 24 };
logPoint(point);
const point3 = { x: 12, y: 24, z: 48 };
logPoint(point3);
const rect = { x: 12, y: 24, width: 48, height: 96 };
logPoint(rect);
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const virtualPoint = new VirtualPoint(12, 24);
console.log(virtualPoint);

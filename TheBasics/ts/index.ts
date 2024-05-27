// // Static type-chechking
// 
// const message = "Hello";
// message();
// 
// console.log("**********************")
// 
// // Non-exception Failures
// 
// const user = {
//     name: "Yusuf",
//     age: 25
// }
// user.location;
// 
// const announcement = "Hello World";
// announcement.toLocalLowerCase()
// 
// function flipCoin() {
//     return Math.random < 0.5;
// }
// 
// const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//     // ...
// }
// else if (value === "b") {
//     // Oops, uncreachable
// }
// 
// console.log("**********************")
// 
// // tsc, the TypeScript compiler
// 
// console.log("Hello world!");
// 
// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
// }
// 
// greet("Yusuf");
// 
// Explicit Types

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`)
}
greet("Yusuf", new Date());

let msg = "hello there";
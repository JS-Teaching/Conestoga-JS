//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["IronMan", "SpiderMan", "Thor"];
let myObj = {
    name: "Faizan",
    age: 26,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack (Primitive)  Heap (Non primitive) 

let myClassName = "JavaScript Programming";
let myClassName2 = myClassName
myClassName2 = "Advnace Javascript Programming"

console.log(myClassName)
console.log(myClassName2)


let userInfo = {
    name: "John",
    age: 30,
    email: "<EMAIL>",
    isLoggedIn: true,
    outsideTemp: null,
}

let user2 = userInfo;
user2.email = "example@example.com";
user2.isLoggedIn = false;

console.log(userInfo.email);
console.table(userInfo);
console.table(user2);

let classInfo = ["James", "John", "Mary"];
let classInfo2 = classInfo;
classInfo2[0] = "Mike";

console.log(classInfo[0]);
console.log(classInfo2[0]);
const arr = [0, 1, 2, 3, 4, 5, 6, 7]
const heros = ["Thor","Iron","Hulk","Darth","R2D2","R"]

const arr2 = new Array();

const {first, second, third, fourth, fifth} = heros

// Array methods

// console.log(heros.length);
// console.log(heros.push("Darth"));

// console.log(heros.pop());
// console.log(heros);

// console.log(heros.includes("James"));
// console.log(heros.indexOf("Darth"));

const newArr = heros.join()

// console.log(heros);
// console.log(newArr, "   Type: ", typeof newArr);

// console.log("A ", heros)
//  const newArr2 = heros.slice(1, 4);
// console.log(newArr2)
// console.log("B ", heros)

// const newArr3 = heros.splice(1, 4);
// console.log("C ", heros)
// console.log(newArr3)

const avengers = ["Thor", "Iron", "Hulk"]
const dcHeros = ["superman", "batman", "flash"]
const cartoons = ["Tom", "Jerry", "Larry"]

// avengers.push(dcHeros)
// console.log(avengers[3][2])

const merge = avengers.concat(dcHeros, cartoons)
// console.log(merge.length)


const newArr4 = [...avengers, ...dcHeros]
// console.log(newArr4)

const newArr5 = [1,3,3,6, [1,8,9,[5,6,4]]]

const merge2 = newArr5.flat(Infinity)
// console.log(merge2)

console.log(Array.isArray(merge))
console.log(Array.from({name: "Thor"}))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

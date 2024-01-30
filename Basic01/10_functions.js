
function sayMyHello(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// sayMyHello()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Javascript"))
// console.log(loginUserMessage("Javascript"))

//Rest Operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user1 = {
    username: "Javascript",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));



// function scope

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Javascript"

    function two(){
        const website = "www.javascipt.com"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Javascript"
    if (username === "Javascript") {
        const website = " www.javascipt.com"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);





console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}






const user = {
    username: "Javascript",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function numb(){
//     let username = "Javascript"
//     console.log(this.username);
// }

// numb()

// const numb = function () {
//     let username = "Javascript"
//     console.log(this.username);
// }

// Arrow functions

const numb =  () => {
    let username = "Javascript"
    console.log(this);
}


// numb()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwoNum = (num1, num2) => ({username: "Javascript"})


console.log(addTwoNum(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
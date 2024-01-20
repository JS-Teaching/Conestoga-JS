// object literal

// const myPlanet = Symbol("myPlanet")

const jupiter = {
    name: "Jupiter",
    "full Name": "Jupiter-Galaxy",
    // [myPlanet]: "Jupiter-Galaxy-Universe",
    radius: 69711000,
    mass: 1.898e24,
    color: "blue",
    distanceFromSun: 149597870700,
    distanceFromEarth: 149597870700,
}



// console.log(jupiter.distanceFromEarth.toLocaleString());

// console.log(jupiter["radius"])
// console.log(jupiter["full Name"])
// console.log(typeof jupiter[myPlanet])

jupiter.color = "red"

// Object.freeze(jupiter)
jupiter.color = "purple"
// console.log(jupiter)



jupiter.rotation = function () {
    console.log("I am a rotation function")
}

jupiter.angle = function () {
    console.log(`The jupiter's angle is ${this.name}`)
}

// console.log(jupiter.angle())

// Singleton

const appUser = new Object()

appUser.name = "John"
appUser.email = " kenaa@example.com "
appUser.password = "123456789"
appUser.age = 20
appUser.gender = "male"

// console.log(appUser)


const appUser2 = {
    email: " kenaa@example.com ",
    fullName: {
        userFullName: {
            firstName: "John",
            lastName: "Doe",

        }
    }
}

// console.log(appUser2.fullname.userFullName.firstName)

const obj1 = {1: "John"}
const obj2 = {2: "James"}

// const obj3 = {obj1 , obj2}
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 =  {...obj1, ...obj2} 
// console.log(obj3)





const user = [{
    id: 1,
    name: "John"
    },
    {
        id: 2,
        name: "Jane"
    },
    {
        id: 3,
        name: "Mary"
    },  
    {
        id: 4,
        name: "John"
    }
]

// console.log(Object.keys(appUser))
// console.log(Object.values(appUser))
// console.log(Object.entries(appUser))

// console.log(appUser.hasOwnProperty("name"))




// De-structuring  

const course = {
    name: "JavaScript",
    price: 1000,
    discount: 100,
    discountedPrice: 100,
    courseInstructor: "IronMan",

}


const {name, price, discount: d} = course;
console.log(`Name: ${name}, Price: ${price}, Discount: ${d}`);
console.log(`Discounted Price: ${course.discountedPrice}`);


// JSON APIs

// {
//     "name": "JSON",
//     "price": 1000,
//     "discount": 100,
//     "discountedPrice": 100,
//     "courseInstructor": "IronMan",
// }


